import { TwAPIService } from './../../src/services/twapi.service';
import { ReflectiveInjector } from '@angular/core';
import { fakeAsync, tick } from '@angular/core/testing';
import { BaseRequestOptions, ConnectionBackend, Http, RequestOptions } from '@angular/http';
import { Response, ResponseOptions } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { User } from './../../src/models/user.model';
import { Watch, WatchAction } from './../../src/models/watch.model';
import { Measure } from './../../src/models/measure.model';
import { BlogPost } from './../../src/models/blog-post.model';
import { ModelFactory } from './../../src/models/model.factory';
import { AnalyticsService } from './../../src/services/analytics.service';


describe('TwAPI Service', () => {

    let twAPIService: TwAPIService;
    let backend: MockBackend;
    let lastConnection: MockConnection;

    let jsonUser = `{
            "userId": "1",
            "email": "m@m.com",
            "firstname": "M",
            "name": "N",
            "country": "C",
            "registerDate": "Monday 2 2016",
            "key": "qwerty",
            "watches": [{
                "watchId":"1",
                "brand":"a",
                "historySize":"1",
                "measures": [{
                    "id": "1",
                    "measureUserTime": "1",
                    "measureReferenceTime": "1",
                    "statusId": "2",
                    "accuracyUserTime": "1",
                    "accuracyReferenceTime": "1",
                    "accuracy": "1",
                    "accuracyAge": "1",
                    "percentile": "1"
                }],
                "name":"a",
                "yearOfBuy":"2016",
                "serial":"a",
                "caliber":"a"
            }]
        }`;

    beforeEach(() => {
        this.injector = ReflectiveInjector.resolveAndCreate([
            { provide: ConnectionBackend, useClass: MockBackend },
            { provide: RequestOptions, useClass: BaseRequestOptions },
            Http,
            TwAPIService,
            AnalyticsService
        ]);
        twAPIService = this.injector.get(TwAPIService);
        backend = this.injector.get(ConnectionBackend) as MockBackend;
        backend.connections.subscribe((connection: MockConnection) => lastConnection = connection);
        TwAPIService.resetTime();
    });

    it('fetchOffsetTime should fetch the offset between the server and js', fakeAsync(() => {

        let result = 0;

        (twAPIService as any).fetchOffsetTime().then((time: number) => {
            result = time;
        });
        lastConnection.mockRespond(new Response(new ResponseOptions({
            body: JSON.stringify({ time: Date.now() }),
        })));
        tick();
        expect(result).toBeGreaterThan(0);
        expect(lastConnection.request.url).toEqual("https://toolwatch.io/api/time");
    }));

    it('fetchOffsetTime should fail', fakeAsync(() => {

        let result = 0;
        let error = "";

        (twAPIService as any).fetchOffsetTime().then(
            (response: number) => { result = response; },
            (reject: string) => { error = reject; }
        );
        lastConnection.mockError(new Error("An error"));

        tick();

        expect(result).toEqual(0, "shouldn t have changed");
        expect(error).toEqual("An error", "should have changed");
        expect(lastConnection.request.url).toEqual("https://toolwatch.io/api/time", "should be consumed");
    }));


    it('should compute accurate time', fakeAsync(() => {

        TwAPIService.resetTime();

        var result: Date;
        let error = "";

        twAPIService.accurateTime(1).then(
            response => { result = response; },
            reject => { error = reject; }
        );

        lastConnection.mockRespond(new Response(new ResponseOptions({
            body: JSON.stringify({ time: Date.now() }),
        })));
        tick();

        expect(result.getDay()).toEqual(new Date().getDay());
        expect(result.getHours()).toEqual(new Date().getHours());
        expect(result.getMinutes()).toEqual(new Date().getMinutes());
        expect(result.getSeconds()).toBeCloseTo(new Date().getSeconds());

    }));

    it('should compute a median offset', fakeAsync(() => {

        TwAPIService.resetTime();

        let numbers = [11, 30, 23, 52, 47, 56];

        let result = (twAPIService as any).computeAverageOffset(numbers);
        let expectedDate = new Date(Date.now() - 38.5);

        expect((TwAPIService as any).time.offset).toEqual(38.5);
        expect((TwAPIService as any).time.syncAnchor).toBeDefined();

        expect(result.getDay()).toEqual(expectedDate.getDay());
        expect(result.getHours()).toEqual(expectedDate.getHours());
        expect(result.getMinutes()).toEqual(expectedDate.getMinutes());
        expect(result.getSeconds()).toEqual(expectedDate.getSeconds());

    }));

    it('should returns the offset', fakeAsync(() => {
        TwAPIService.resetTime();
        let numbers = [11, 30, 23, 52, 47, 56];
        (twAPIService as any).computeAverageOffset(numbers);

        expect(twAPIService.getOffsetTime()).toEqual(38.5);
    }));

    it('should log an user', fakeAsync(() => {

        var user: User;

        twAPIService.login("m@m.com", "qwerty").then(
            response => { user = response; }
        );

        lastConnection.mockRespond(new Response(new ResponseOptions({
            body: jsonUser,
        })));
        tick();

        expect(user.email).toEqual("m@m.com");
        expect(lastConnection.request.url).toEqual(TwAPIService.baseUrl + "users", "should be consumed");
        expect(lastConnection.request.json().email).toEqual("m@m.com");
        expect(lastConnection.request.json().password).toEqual("qwerty");
        expect((TwAPIService as any).apikey).toEqual("qwerty");
    }));


    it('shouldn\'t log an user (bad cred)', fakeAsync(() => {

        var user: User;
        let error = "";

        twAPIService.login("m@m.com", "qwerty").then(
            response => { user = response; },
            reject => { error = reject; }
        );
        lastConnection.mockError(new Error("An error"));
        tick();
        expect(user).toBeUndefined();
        expect(error).toEqual("An error", "should have changed");
        expect(lastConnection.request.url).toEqual(TwAPIService.baseUrl + "users", "should be consumed");
    }));

    it('should get an user', fakeAsync(() => {

        var user: User;

        twAPIService.getUser("qwerty").then(
            response => { user = response; },
        );
        lastConnection.mockRespond(new Response(new ResponseOptions({
            body: jsonUser,
        })));
        tick();

        expect(user.email).toEqual("m@m.com");
        expect(lastConnection.request.url).toEqual(TwAPIService.baseUrl + "users", "should be consumed");
        expect(lastConnection.request.headers.get("X-API-KEY")).toEqual("qwerty");
        expect((TwAPIService as any).apikey).toEqual("qwerty");

    }));

    it('shouldn\'t get an user (bad key)', fakeAsync(() => {
        var user: User;
        let error = "";

        twAPIService.getUser("qwerty").then(
            response => { user = response; },
            reject => { error = reject; }
        );
        lastConnection.mockError(new Error("An error"));
        tick();
        expect(user).toBeUndefined();
        expect(error).toEqual("An error", "should have changed");
        expect(lastConnection.request.url).toEqual(TwAPIService.baseUrl + "users", "should be consumed");
        expect(lastConnection.request.headers.get("X-API-KEY")).toEqual("qwerty");
        expect((TwAPIService as any).apikey).toEqual("qwerty");

    }));

    it('should signup an user', fakeAsync(() => {
        var user: User;

        twAPIService.signup("m@m.com", "qwerty", "M", "N", "C").then(
            response => { user = response; },
        );
        lastConnection.mockRespond(new Response(new ResponseOptions({
            body: jsonUser,
        })));
        tick();

        expect(user.email).toEqual("m@m.com");
        expect(lastConnection.request.url).toEqual(TwAPIService.baseUrl + "users", "should be consumed");
        expect((TwAPIService as any).apikey).toEqual("qwerty");
    }));

    it('should signup a fb user', fakeAsync(() => {
        var user: User;

        twAPIService.signupFacebook("m@m.com", "qwerty", "M", "N").then(
            response => { user = response; },
        );
        lastConnection.mockRespond(new Response(new ResponseOptions({
            body: jsonUser,
        })));
        tick();

        expect(user.email).toEqual("m@m.com");
        expect(lastConnection.request.url).toEqual(TwAPIService.baseUrl + "users/facebook", "should be consumed");
        expect((TwAPIService as any).apikey).toEqual("qwerty");
    }));

    it('should reset a password', fakeAsync(() => {

        var result: boolean;

        twAPIService.resetPassword("m@m.com").then(
            response => { result = response; },
        );
        lastConnection.mockRespond(new Response(new ResponseOptions({
            body: jsonUser,
        })));
        tick();

        expect(result).toBeTruthy();
        expect(lastConnection.request.url).toEqual(TwAPIService.baseUrl + "users/reset", "should be consumed");
        expect(lastConnection.request.json().email).toEqual("m@m.com");
    }));

    it('should\nt reset a password (bad requests)', fakeAsync(() => {
        var result: boolean;
        var error: string;

        twAPIService.resetPassword("m@m.com").then(
            response => { result = response; },
            reject => { error = reject; }
        );
        lastConnection.mockError(new Error("An error"));
        tick();

        expect(result).toBeUndefined();
        expect(lastConnection.request.url).toEqual(TwAPIService.baseUrl + "users/reset", "should be consumed");
        expect(lastConnection.request.json().email).toEqual("m@m.com");
        expect(error).toEqual("An error", "should have changed");

    }));

    it('should delete an account', fakeAsync(() => {

        var result: boolean;

        twAPIService.deleteAccount().then(
            response => { result = response; },
        );

        lastConnection.mockRespond(new Response(new ResponseOptions({
            body: "{true}",
        })));
        tick();

        expect(result).toBeTruthy();
        expect(lastConnection.request.url).toEqual(TwAPIService.baseUrl + "users", "should be consumed");
    }));

    it('should\nt delete an account (bad requests)', fakeAsync(() => {
        var result: boolean;
        var error: string;

        twAPIService.deleteAccount().then(
            response => { result = response; },
            reject => { error = reject; }
        );
        lastConnection.mockError(new Error("An error"));
        tick();

        expect(result).toBeUndefined();
        expect(lastConnection.request.url).toEqual(TwAPIService.baseUrl + "users", "should be consumed");
        expect(error).toEqual("An error", "should have changed");

    }));

    it('should get watches', fakeAsync(() => {

        var result: Watch[];

        twAPIService.getWatches().then(
            response => { result = response; },
        );

        lastConnection.mockRespond(new Response(new ResponseOptions({
            body: JSON.stringify(JSON.parse(jsonUser).watches),
        })));
        tick();

        expect(result.length).toEqual(1);
        expect(result[0].name).toEqual("a");
        expect(result[0].measures.length).toEqual(1);
        expect(lastConnection.request.url).toEqual(TwAPIService.baseUrl + "watches", "should be consumed");
    }));

    it('shouldn\'t get watches (bad key)', fakeAsync(() => {

        var result: Watch[];
        var error: string;


        twAPIService.getWatches().then(
            response => { result = response; },
            reject => { error = reject; }
        );
        lastConnection.mockError(new Error("An error"));
        tick();

        expect(result).toBeUndefined();
        expect(error).toEqual("An error", "should have changed");
        expect(lastConnection.request.url).toEqual(TwAPIService.baseUrl + "watches", "should be consumed");
    }));

    it('should update a watch', fakeAsync(() => {

        let watch = JSON.parse(jsonUser).watches[0];
        watch.id = watch.watchId;
        let result: Watch;

        twAPIService.upsertWatch(watch).then(
            response => { result = response; },
        );

        lastConnection.mockRespond(new Response(new ResponseOptions({
            body: JSON.stringify(watch),
        })));
        tick();

        expect(result.id).toEqual(watch.id);
        expect(result.brand).toEqual(watch.brand);
        expect(result.name).toEqual(watch.name);
        expect(result.yearOfBuy).toEqual(watch.yearOfBuy);
        expect(result.serial).toEqual(watch.serial);
        expect(result.caliber).toEqual(watch.caliber);

        expect(lastConnection.request.url).toEqual(TwAPIService.baseUrl + "watches", "should be consumed");
    }));

    it('should insert a watch', fakeAsync(() => {

        let watch = JSON.parse(jsonUser).watches[0];
        watch.id = null;
        let result: Watch;

        twAPIService.upsertWatch(watch).then(
            response => { result = response; },
        );

        lastConnection.mockRespond(new Response(new ResponseOptions({
            body: JSON.stringify(watch),
        })));
        tick();

        expect(result.id).toEqual(watch.id);
        expect(result.brand).toEqual(watch.brand);
        expect(result.name).toEqual(watch.name);
        expect(result.yearOfBuy).toEqual(watch.yearOfBuy);
        expect(result.serial).toEqual(watch.serial);
        expect(result.caliber).toEqual(watch.caliber);

        expect(lastConnection.request.url).toEqual(TwAPIService.baseUrl + "watches", "should be consumed");
    }));

    it('should delete a watch', fakeAsync(() => {

        let user = ModelFactory.buildUser(JSON.parse(jsonUser));
        let watch = user.watches[0];
        let result: User;

        twAPIService.deleteWatch(user, watch).then(
            response => { result = response; },
        );
        lastConnection.mockRespond(new Response(new ResponseOptions({
            body: "{true}",
        })));
        tick();

        expect(result.id).toEqual(watch.id);
        expect(result.watches.length).toEqual(0);

        expect(lastConnection.request.url).toEqual(TwAPIService.baseUrl + "watches", "should be consumed");
    }));

    it('should update a measure', fakeAsync(() => {
        let user = ModelFactory.buildUser(JSON.parse(jsonUser));
        let watch = user.watches[0];
        watch.measures = [new Measure(1, 1, 1, 0, 1, 1)];

        let result: Watch;

        twAPIService.upsertMeasure(watch, watch.measures[0]).then(
            response => { result = response; },
        );
        lastConnection.mockRespond(new Response(new ResponseOptions({
            body: "{\"result\":{\"accuracy\":\"1\", \"accuracyAge\":\"1\", \"percentile\":\"1\"}}",
        })));
        tick();

        expect(lastConnection.request.url).toEqual(TwAPIService.baseUrl + "measures", "should be consumed");
        expect(lastConnection.request.json().measureId).toEqual(1);
        expect(lastConnection.request.json().referenceTime).toEqual(1);
        expect(lastConnection.request.json().userTime).toEqual(1);

        expect(result.measures[0].accuracy + "").toEqual("1");
        expect(result.measures[0].accuracyAge + "").toEqual("1");
        expect(result.measures[0].percentile + "").toEqual("1");
        expect(result.measures.length).toEqual(1);
        expect(result.next).toEqual(WatchAction.Measure);

    }));

    it('should insert a measure', fakeAsync(() => {
        let user = ModelFactory.buildUser(JSON.parse(jsonUser));
        let watch = user.watches[0];
        watch.measures = [];
        watch.historySize = 0;

        let result: Watch;

        twAPIService.upsertMeasure(watch, new Measure(null, 1, 1)).then(
            response => { result = response; },
        );
        lastConnection.mockRespond(new Response(new ResponseOptions({
            body: "{\"measureId\":\"1\"}",
        })));
        tick();

        expect(lastConnection.request.url).toEqual(TwAPIService.baseUrl + "measures", "should be consumed");
        expect(lastConnection.request.json().watchId).toEqual("1");
        expect(lastConnection.request.json().referenceTime).toEqual(1);
        expect(lastConnection.request.json().userTime).toEqual(1);

        expect(result.measures[0].id + "").toEqual("1");
        expect(result.measures.length).toEqual(1);
        expect(result.historySize).toEqual(1);
    }));


    it('should delete a measure', fakeAsync(() => {

        let user = ModelFactory.buildUser(JSON.parse(jsonUser));
        let result: Watch;

        twAPIService.deleteMeasure(user.watches[0], user.watches[0].measures[0]).then(
            response => { result = response; },
        );
        lastConnection.mockRespond(new Response(new ResponseOptions({
            body: "{true}",
        })));
        tick();

        expect(lastConnection.request.url).toEqual(TwAPIService.baseUrl + "measures", "should be consumed");
        expect(result.measures.length).toEqual(0);
        expect(result.historySize).toEqual(0);

    }));

    it('should get blockposts', fakeAsync(() => {

        let jsonPosts = `
            {"status":"ok","count":10,"count_total":27,"pages":3,"posts":[
            {
                "id":681,
                "type":"post",
                "slug":"three-ways-to-demagnetize-a-watch",
                "url":"aaa",
                "status":"publish",
                "title":"aa",
                "title_plain":"aaa",
                "content":"aaaaa",
                "excerpt":"aaaaaa",
                "date":"2017-04-05 22:06:19",
                "modified":"2017-04-05 22:12:27",
                "categories":[],"tags":[],
                "author":{},
                "comments":[],
                "attachments":[],
                "comment_count":0,
                "comment_status":"open",
                "thumbnail":null,
                "thumbnail_size":"thumbnail",
                "thumbnail_images":[]
            }]}`;

        let result: BlogPost[];

        twAPIService.getBlogPosts().then(
            response => { result = response; },
        );

        lastConnection.mockRespond(new Response(new ResponseOptions({
            body: jsonPosts,
        })));
        tick();

        expect(lastConnection.request.url).toEqual("https://blog.toolwatch.io/?json=1", "should be consumed");

        expect(result.length).toEqual(1);
        expect(result[0].id).toEqual(681);

    }));

    it('should get likely brands', fakeAsync(() => {

        let results: { watch: Watch, proposals: [{ brand: string, logo: string, confidence: number }] };

        let watch = new Watch(1, "Cartie");

        twAPIService.getLikelyBrands(watch).then(
            response => { results = response; },
        );

        lastConnection.mockRespond(new Response(new ResponseOptions({
            body: `
            [
                {"name": "A. Lange & Sohne", "icon": "logo_alangesohne.jpg", "models": "alangesohne"},
                {"name": "Alpina", "icon": "logo_alpina.png", "models": "alpina"},
                {"name": "Alexandre Meerson", "icon": "logo_meerson.png", "models": "alexandremeerson"},
                {"name": "Armin Strom", "icon": "armin_strom_logo.jpg", "models": "arminstrom"},
                {"name": "Cartier", "icon": "logo_cartier.jpeg", "models": "cartier"}
            ]
            `
        })));
        tick();

        expect(lastConnection.request.url).toEqual(TwAPIService.assetsUrl + '/watches/watch-brand.json', "should be consumed");

        expect(results.proposals.length).toEqual(5);
        expect(results.proposals[0].confidence).toEqual(85.71428571428572);
        expect(results.proposals[0].brand).toEqual("Cartier");
        expect(results.proposals[1].confidence).toEqual(17.64705882352942);
        expect(results.proposals[1].brand).toEqual("Alexandre Meerson");

    }));

    it('should get brands', fakeAsync(() => {

        let results: [{ name: string, icon: string, models: string }];

        twAPIService.getBrands().then(
            response => { results = response; },
        );

        lastConnection.mockRespond(new Response(new ResponseOptions({
            body: `
            [
                {"name": "A. Lange & Sohne", "icon": "logo_alangesohne.jpg", "models": "alangesohne"},
                {"name": "Alpina", "icon": "logo_alpina.png", "models": "alpina"},
                {"name": "Alexandre Meerson", "icon": "logo_meerson.png", "models": "alexandremeerson"},
                {"name": "Armin Strom", "icon": "armin_strom_logo.jpg", "models": "arminstrom"},
                {"name": "Cartier", "icon": "logo_cartier.jpeg", "models": "cartier"}
            ]
            `
        })));
        tick();

        expect(lastConnection.request.url).toEqual(TwAPIService.assetsUrl + '/watches/watch-brand.json', "should be consumed");
        expect(results.length).toEqual(5);
        expect(results[0].name).toEqual("A. Lange & Sohne");
        expect(results[0].icon).toEqual("logo_alangesohne.jpg");
        expect(results[0].models).toEqual("alangesohne");
    }));


    it('should get models', fakeAsync(() => {

        let results: [string];
        twAPIService.getModels("cartier").then(
            response => { results = response; },
        );

        lastConnection.mockRespond(new Response(new ResponseOptions({
            body: `
            [
                "Cle de Cartier",
                "Rotonde de Cartier",
                "Ronde Louis Cartier",
                "Solo Ronde"
            ]
            `
        })));
        tick();

        expect(lastConnection.request.url).toEqual(TwAPIService.assetsUrl + '/watches/watch-models/cartier.json', "should be consumed");
        expect(results.length).toEqual(4);
        expect(results[0]).toEqual("Cle de Cartier");

    }));


    it('should get calibers', fakeAsync(() => {

        let results: [string];
        twAPIService.getCalibers("cartier").then(
            response => { results = response; },
        );
        lastConnection.mockRespond(new Response(new ResponseOptions({
            body: `
            [
                "049",
                "049 No Date",
                "1847 MC",
                "1847 MC No Date",
                "1904-CH MC",
                "1904-FU MC"
            ]
            `
        })));
        tick();
        expect(lastConnection.request.url).toEqual(TwAPIService.assetsUrl + '/watches/watch-calibers/cartier.json', "should be consumed");
        expect(results.length).toEqual(6);
        expect(results[0]).toEqual("049");

    }));


});
import { TwAPIService } from './../../src/services/twapi.service';
import { ReflectiveInjector } from '@angular/core';
import { fakeAsync, tick } from '@angular/core/testing';
import { BaseRequestOptions, ConnectionBackend, Http, RequestOptions } from '@angular/http';
import { Response, ResponseOptions } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { User } from './../../src/models/user.model';

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

});
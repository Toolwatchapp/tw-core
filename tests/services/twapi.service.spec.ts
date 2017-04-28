import { TwAPIService } from './../../src/services/twapi.service';
import { ReflectiveInjector } from '@angular/core';
import { fakeAsync, tick } from '@angular/core/testing';
import { BaseRequestOptions, ConnectionBackend, Http, RequestOptions } from '@angular/http';
import { Response, ResponseOptions } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';

describe('TwAPI Service', () => {

    let twAPIService: TwAPIService;
    let backend: MockBackend;
    let lastConnection: MockConnection;

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

});
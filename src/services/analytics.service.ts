import { Injectable } from '@angular/core';
declare let ga: any;
export var gaNewElem: any = {};
export var gaElems: any = {};
@Injectable()
/**
 * Exposes the Toolwatch API.
 * Returns promeses on domain objects
 */
export class AnalyticsService {

    private _appName: string;
    private _appVersion: string;
    private _userName: string;
    private _userEmail: string;

    constructor() {

        var currdate: any = new Date();

        /* tslint:disable:no-string-literal */
        /* tslint:disable:semicolon */
        /* tslint:disable:no-unused-expression */
        // This code is from Google, so let's not modify it too much, just add gaNewElem and gaElems:
        (function (i: any, s: any, o: any, g: any, r: any, a: any, m: any) {
        i['GoogleAnalyticsObject'] = r; i[r] = i[r] || function () {
            (i[r].q = i[r].q || []).push(arguments)
        }, i[r].l = 1 * currdate; a = s.createElement(o),
            m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a, m)
        })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga', gaNewElem, gaElems);

        /* tslint:enable:no-unused-expression */
        /* tslint:enable:semicolon */
        /* tslint:enable:no-string-literal */

        ga('create', 'UA-59148878-1', {
            'cookieDomain': 'toolwatchapp.io'
        }, { 'allowLinker': true });
        ga('require', 'linker');
        ga('linker:autoLink', ['toolwatch.io']);
    }

    public event(domain: string, path: string, method: string = ""): void {
        ga('send', 'event', domain, path, method);
    }

    public screenview(screen: string): void {
        ga('set', 'page', screen);
        ga('send', 'pageview');
    }

    get appName(): string {
        return this._appName;
    }
    get appVersion(): string {
        return this._appVersion;
    }
    get userName(): string {
        return this._userName;
    }
    get userEmail(): string {
        return this._userEmail;
    }

    set appName(appName: string) {
        this._appName = appName;
    }
    set appVersion(appVersion: string) {
        this._appVersion = appVersion;
    }
    set userName(userName: string) {
        this._userName = userName;
    }
    set userEmail(userEmail: string) {
        this._userEmail = userEmail;
    }
}
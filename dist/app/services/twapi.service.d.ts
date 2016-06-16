/// <reference path="../../../typings/browser.d.ts" />
import { Http } from '@angular/http';
import { User } from './../models/user.model';
import { Watch } from './../models/watch.model';
import { Measure } from './../models/measure.model';
import 'rxjs/add/operator/toPromise';
export declare class TwAPIService {
    private http;
    private headers;
    private options;
    private baseUrl;
    private static apikey;
    /**
     * Inject http service
     * @param {Http} private http
     */
    constructor(http: Http);
    /**
     * Log a user using email and password
     * @param  {string}        email
     * @param  {string}        password
     * @return {Promise<User>}
     */
    login(email: string, password: string): Promise<User>;
    /**
     * Registers a new user
     * @param  {string}        email
     * @param  {string}        password
     * @param  {string}        name
     * @param  {string}        lastname
     * @param  {string}        country
     * @return {Promise<User>}
     */
    signup(email: string, password: string, name?: string, lastname?: string, country?: string): Promise<User>;
    /**
     * Deletes the account currently logged in.
     * @return {Promise<boolean>}
     */
    deleteAccount(): Promise<boolean>;
    /**
     * Update or insert a watch
     * @param  {Watch}          watch
     * @return {Promise<Watch>}
     */
    upsertWatch(watch: Watch): Promise<Watch>;
    /**
     * Deletes a watch and update the user accordingly
     * @param  {User}          user
     * @param  {Watch}         watch
     * @return {Promise<User>}
     */
    deleteWatch(user: User, watch: Watch): Promise<User>;
    /**
     * Insert or update a measure and the related watch
     * @param  {Watch}          watch
     * @param  {Measure}        measure
     * @return {Promise<Watch>}
     */
    upsertMeasure(watch: Watch, measure: Measure): Promise<Watch>;
    /**
     * Delete a measure and the update the related watch
     * @param  {Watch}          watch
     * @param  {Measure}        measure
     * @return {Promise<Watch>}
     */
    deleteMeasure(watch: Watch, measure: Measure): Promise<Watch>;
    /**
     * Retrieve atomic clock time adjusted for network latency
     * @param  {()=>void} statusCallback Called at each partial complete
     * @param  {number = 0} precison How many calls we want to aveage
     * @return {Promise<Date>}
     */
    accurateTime(statusCallback?: () => void, precison?: number): Promise<Date>;
    /**
     * Fetch offset between atomic clock and js time
     * @param {() => void} statusCallback
     */
    private fetchTime(statusCallback?);
    /**
     * Update a measure and the watch it belongs to
     * @param  {Watch}          watch
     * @param  {Measure}        measure
     * @return {Promise<Watch>}
     */
    private updateMeasure(watch, measure);
    /**
     * Insert a measure and the watch it belongs to
     * @param  {Watch}          watch
     * @param  {Measure}        measure
     * @return {Promise<Watch>}
     */
    private insertMeasure(watch, measure);
    /**
     * Insert a watch
     * @param  {Watch}          watch
     * @return {Promise<Watch>}
     */
    private insertWatch(watch);
    /**
     * Update a watch
     * @param  {Watch}          watch
     * @return {Promise<Watch>}
     */
    private updateWatch(watch);
    /**
     * Log error to console
     * @param {any} error [description]
     */
    private handleError(error);
}

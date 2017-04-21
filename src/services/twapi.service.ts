import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers }  from '@angular/http';


import { User }  from './../models/user.model';
import { Watch, WatchAction }  from './../models/watch.model';
import { Measure }  from './../models/measure.model';
import { ModelFactory }  from './../models/model.factory';
import { BlogPost } from './../models/blog-post.model';
import { AnalyticsService } from './analytics.service';
import { StringHelper } from './../helpers/string.helper';
import 'rxjs/Rx';

@Injectable()
/**
 * Exposes the Toolwatch API.
 * Returns promeses on domain objects
 */
export class TwAPIService {

    /**
     * All the HTTP code used by the toolwatch API are defined here.
     * Http codes can be to refine the error types
     */
    public static HTTP_CONTINUE = 100;
    public static HTTP_SWITCHING_PROTOCOLS = 101;
    public static HTTP_PROCESSING = 102;            // RFC2518

    // Success

    /**
     * The request has succeeded
     */
    public static HTTP_OK = 200;

    /**
     * The server successfully created a new resource
     */
    public static HTTP_CREATED = 201;
    public static HTTP_ACCEPTED = 202;
    public static HTTP_NON_AUTHORITATIVE_INFORMATION = 203;

    /**
     * The server successfully processed the request, though no content is returned
     */
    public static HTTP_NO_CONTENT = 204;
    public static HTTP_RESET_CONTENT = 205;
    public static HTTP_PARTIAL_CONTENT = 206;
    public static HTTP_MULTI_STATUS = 207;          // RFC4918
    public static HTTP_ALREADY_REPORTED = 208;      // RFC5842
    public static HTTP_IM_USED = 226;               // RFC3229

    // Redirection

    public static HTTP_MULTIPLE_CHOICES = 300;
    public static HTTP_MOVED_PERMANENTLY = 301;
    public static HTTP_FOUND = 302;
    public static HTTP_SEE_OTHER = 303;

    /**
     * The resource has not been modified since the last request
     */
    public static HTTP_NOT_MODIFIED = 304;
    public static HTTP_USE_PROXY = 305;
    public static HTTP_RESERVED = 306;
    public static HTTP_TEMPORARY_REDIRECT = 307;
    public static HTTP_PERMANENTLY_REDIRECT = 308;  // RFC7238

    // Client Error

    /**
     * The request cannot be fulfilled due to multiple errors
     */
    public static HTTP_BAD_REQUEST = 400;

    /**
     * The user is unauthorized to access the requested resource
     */
    public static HTTP_UNAUTHORIZED = 401;
    public static HTTP_PAYMENT_REQUIRED = 402;

    /**
     * The requested resource is unavailable at this present time
     */
    public static HTTP_FORBIDDEN = 403;

    /**
     * The requested resource could not be found
     *
     * Note: This is sometimes used to mask if there was an UNAUTHORIZED (401) or
     * FORBIDDEN (403) error, for security reasons
     */
    public static HTTP_NOT_FOUND = 404;

    /**
     * The request method is not supported by the following resource
     */
    public static HTTP_METHOD_NOT_ALLOWED = 405;

    /**
     * The request was not acceptable
     */
    public static HTTP_NOT_ACCEPTABLE = 406;
    public static HTTP_PROXY_AUTHENTICATION_REQUIRED = 407;
    public static HTTP_REQUEST_TIMEOUT = 408;

    /**
     * The request could not be completed due to a conflict with the current state
     * of the resource
     */
    public static HTTP_CONFLICT = 409;
    public static HTTP_GONE = 410;
    public static HTTP_LENGTH_REQUIRED = 411;
    public static HTTP_PRECONDITION_FAILED = 412;
    public static HTTP_REQUEST_ENTITY_TOO_LARGE = 413;
    public static HTTP_REQUEST_URI_TOO_LONG = 414;
    public static HTTP_UNSUPPORTED_MEDIA_TYPE = 415;
    public static HTTP_REQUESTED_RANGE_NOT_SATISFIABLE = 416;
    public static HTTP_EXPECTATION_FAILED = 417;
    public static HTTP_I_AM_A_TEAPOT = 418;                                               // RFC2324
    public static HTTP_UNPROCESSABLE_ENTITY = 422;                                        // RFC4918
    public static HTTP_LOCKED = 423;                                                      // RFC4918
    public static HTTP_FAILED_DEPENDENCY = 424;                                           // RFC4918
    public static HTTP_RESERVED_FOR_WEBDAV_ADVANCED_COLLECTIONS_EXPIRED_PROPOSAL = 425;   // RFC2817
    public static HTTP_UPGRADE_REQUIRED = 426;                                            // RFC2817
    public static HTTP_PRECONDITION_REQUIRED = 428;                                       // RFC6585
    public static HTTP_TOO_MANY_REQUESTS = 429;                                           // RFC6585
    public static HTTP_REQUEST_HEADER_FIELDS_TOO_LARGE = 431;                             // RFC6585

    // Server Error

    /**
     * The server encountered an unexpected error
     *
     * Note: This is a generic error message when no specific message
     * is suitable
     */
    public static HTTP_INTERNAL_SERVER_ERROR = 500;

    /**
     * The server does not recognise the request method
     */
    public static HTTP_NOT_IMPLEMENTED = 501;
    public static HTTP_BAD_GATEWAY = 502;
    public static HTTP_SERVICE_UNAVAILABLE = 503;
    public static HTTP_GATEWAY_TIMEOUT = 504;
    public static HTTP_VERSION_NOT_SUPPORTED = 505;
    public static HTTP_VARIANT_ALSO_NEGOTIATES_EXPERIMENTAL = 506;                        // RFC2295
    public static HTTP_INSUFFICIENT_STORAGE = 507;                                        // RFC4918
    public static HTTP_LOOP_DETECTED = 508;                                               // RFC5842
    public static HTTP_NOT_EXTENDED = 510;                                                // RFC2774
    public static HTTP_NETWORK_AUTHENTICATION_REQUIRED = 511;

    public static user:User = null;
    private static time:{
        syncDate:Date,
        syncAnchor:number,
        offset:number
    } = null;

    //Defines headers and request options
    private static headers: Headers = new Headers({ 'Content-Type': 'application/json' });
    private static options: RequestOptions = new RequestOptions({ headers: TwAPIService.headers });
    // Regression RC5. Doesn't accept get without body
    private static optionsGet: RequestOptions = new RequestOptions({ headers: TwAPIService.headers, body:"" });
    
    public static baseUrl:string = "https://toolwatch.io/api/";
    public static assetsUrl = "assets";
    private static apikey:string = null;

    /**
     * Inject http service
     * @param {Http} private http 
     */
    constructor(public http: Http) {
        this.accurateTime();
    }

    public static resetTime() {
        TwAPIService.time = undefined;
    }

    /**
     * Log a user using email and password
     * @param  {string}        email   
     * @param  {string}        password
     * @return {Promise<User>}         
     */
    login(email: string, password: string): Promise<User> {

        let creds = { email: email, password: password };
        return this.http.put(
            TwAPIService.baseUrl + "users", 
            JSON.stringify(creds), 
            TwAPIService.options
        )
        .map((res) => { return ModelFactory.buildUser(res.json()); })
        .toPromise().then(
            res => {
                AnalyticsService.event('API', 'LOGIN');
                TwAPIService.apikey = res.key;
                TwAPIService.headers.delete('X-API-KEY');
                TwAPIService.headers.append('X-API-KEY', TwAPIService.apikey);
                TwAPIService.user = res;
                return res;
            },
            err => this.handleError(err)
        );
    }  


    /**
     * Get an user using his API key
     * @param  {string}        key [description]
     * @return {Promise<User>}     [description]
     */
    getUser(key:string):Promise<User> {

        
        TwAPIService.apikey = key;
        TwAPIService.headers.delete('X-API-KEY');
        TwAPIService.headers.append('X-API-KEY', TwAPIService.apikey);
        

        return this.http.get(
            TwAPIService.baseUrl + "users", 
            TwAPIService.options
        )
        .map((res) => { return ModelFactory.buildUser(res.json()); })
        .toPromise().then(
            res => {

                AnalyticsService.event('API', 'AUTOLOGIN');
                TwAPIService.user = res;
                res.key = key;
                return res;
            },
            err => this.handleError(err)
        );

    }

    /**
     * Registers a new user
     * @param  {string}        email   
     * @param  {string}        password
     * @param  {string}        name    
     * @param  {string}        lastname
     * @param  {string}        country 
     * @return {Promise<User>}         
     */
    signup(email: string, password: string, name?: string, lastname?: string, country?: string): Promise<User> {

        return this.http.post(
            TwAPIService.baseUrl + "users",
            JSON.stringify({
                email: email, 
                password: password,
                name: name,
                lastname: lastname,
                country:country
            }),
            TwAPIService.options
        )
        .map((res) => { return ModelFactory.buildUser(res.json()); })
        .toPromise().then(
            res => {
                AnalyticsService.event('API', 'SIGNUP');
                TwAPIService.apikey = res.key;
                TwAPIService.headers.delete('X-API-KEY');
                TwAPIService.headers.append('X-API-KEY', TwAPIService.apikey);
                TwAPIService.user = res;
                return res;
            }
        );
    }

    /**
     * Registers a new facebook user
     * @param  {string}        email   
     * @param  {string}        token
     * @param  {string}        name    
     * @param  {string}        lastname
     * @return {Promise<User>}     
     */
    signupFacebook(email: string, token: string, name?: string, lastname?: string): Promise<User> {
        return this.http.post(
            TwAPIService.baseUrl + "users/facebook",
            JSON.stringify({
                email: email, 
                token: token,
                name: name,
                lastname: lastname
            }),
            TwAPIService.options
        )
        .map((res) => { return ModelFactory.buildUser(res.json()); })
        .toPromise().then(
            res => {
                AnalyticsService.event('API', 'SIGNUP');
                TwAPIService.apikey = res.key;
                TwAPIService.headers.delete('X-API-KEY');
                TwAPIService.headers.append('X-API-KEY', TwAPIService.apikey);
                TwAPIService.user = res;
                return res;
            }
        );
    }

    /**
     * Ask a reset password link
     * @return {Promise<boolean>}
     */
    resetPassword(email:string):Promise<boolean> {
        return this.http.post(
            TwAPIService.baseUrl + "users/reset",
            JSON.stringify({
                email: email
            }),
            TwAPIService.options
        ).toPromise().then(
            response => {
                AnalyticsService.event('API', 'RESET_PASSWORD');
                return true;
            }
        ).catch(this.handleError);
    }

    /**
     * Deletes the account currently logged in.
     * @return {Promise<boolean>}
     */
    deleteAccount():Promise<boolean> {

        return this.http.delete(
            TwAPIService.baseUrl + "users",
            TwAPIService.options
        ).toPromise().then(
            response => {
                AnalyticsService.event('API', 'DELETE_ACCOUNT');
                return true;
            }
        ).catch(this.handleError);
    }

    /**
     * Get the watches of an user
     * @return {Promise<Watch[]>}
     */
    getWatches(): Promise<Watch[]> {
        return this.http.get(
            TwAPIService.baseUrl + "watches",
            TwAPIService.optionsGet)
        .map((res) => { return ModelFactory.buildWatches(res.json()); })
        .toPromise().then(
            res => {
                AnalyticsService.event('API', 'WATCHES', 'GET');
                return res;
            }
        );
    }

    /**
     * Update or insert a watch
     * @param  {Watch}          watch
     * @return {Promise<Watch>}      
     */
    upsertWatch(watch: Watch): Promise<Watch> {

        if(watch.id == null) {
            return this.insertWatch(watch);
        } else {
            return this.updateWatch(watch);
        }
    }

    /**
     * Deletes a watch and update the user accordingly
     * @param  {User}          user  
     * @param  {Watch}         watch 
     * @return {Promise<User>}       
     */
    deleteWatch(user:User, watch:Watch):Promise<User> {
        let deleteOptions = new RequestOptions({ headers: TwAPIService.headers });
        deleteOptions.body = JSON.stringify({ watchId: watch.id });

        return this.http.delete(
            TwAPIService.baseUrl + "watches",
            deleteOptions
        ).toPromise().then(
            response => {

                user.watches = user.watches.filter(
                    function(filter: Watch) {
                        return filter.id !== watch.id;
                    }
                );

                AnalyticsService.event('API', 'WATCHES', 'DELETE');

                return user;
            }
        );
    }

    /**
     * Insert or update a measure and the related watch
     * @param  {Watch}          watch  
     * @param  {Measure}        measure
     * @return {Promise<Watch>}        
     */
    upsertMeasure(watch: Watch, measure: Measure): Promise<Watch> {
        if(measure.id == null) {
            return this.insertMeasure(watch, measure);
        } else {
            return this.updateMeasure(watch, measure);
        }
    }

    /**
     * Delete a measure and the update the related watch
     * @param  {Watch}          watch  
     * @param  {Measure}        measure
     * @return {Promise<Watch>}        
     */
    deleteMeasure(watch: Watch, measure: Measure): Promise<Watch> {

        let deleteOptions = new RequestOptions({ headers: TwAPIService.headers });
        deleteOptions.body = JSON.stringify({measureId:measure.id});

        return this.http.delete(
            TwAPIService.baseUrl + "measures",
            deleteOptions
        ).toPromise().then(
            response => {

                watch.measures = watch.measures.filter(
                    function(filter: Measure) {
                        return filter.id !== measure.id;
                    }
                );

                watch.computeNext();
                watch.historySize--;

                AnalyticsService.event('API', 'MEASURE', 'DELETE');

                return watch;
            }
        ).catch(this.handleError);
    }

    getBlogPosts(): Promise<BlogPost[]> {
        return this.http.get(
            "https://blog.toolwatch.io/?json=1"
        )
        .map((res) => { return ModelFactory.buildPosts(res.json()); })
        .toPromise().then(
            res => {
                AnalyticsService.event('API', 'BLOG', 'GET');
                return res;
            }
        );
    }

    /**
     * Given a brand, returns likely brands ordered by confidence
     * @param  {string}  brand [description]
     * @return {Promise}       [{brand:string, confidence:number}]
     */
    getLikelyBrands(watch:Watch): Promise<{watch:Watch, proposals:[{brand:string, logo:string, confidence:number}]}> {

        return this.http.get(
            TwAPIService.assetsUrl + '/watch-brand.json')
        .map(res => res.json())
        .toPromise().then(
            brands => {



                var likelyBrands = {watch: watch, proposals:[] as {brand:string, logo:string, confidence:number}[]};

                for (var i = brands.length - 1; i >= 0; i--) {


                    let levenshteinDistance = StringHelper.levenshtein(brands[i].name, watch.brand);
                    let confidence = levenshteinDistance / Math.max(watch.brand.length, brands[i].name.length) *100;
                    
                    likelyBrands.proposals.push(
                        {
                            brand:brands[i].name,
                            logo: brands[i].icon,
                            confidence: 100 - confidence
                        }
                    );
                }

                likelyBrands.proposals = likelyBrands.proposals.sort(function (
                    a:{brand:string, confidence:number}, 
                    b:{brand:string, confidence:number}){
                    return b.confidence - a.confidence;
                });

                return likelyBrands;
            }
        );

    }

    /**
     * Return known brands
     * @return {Promise} 
     */
    getBrands(): Promise<[{ name: string, icon: string, models:string}]> {
        return this.http.get(
            TwAPIService.assetsUrl + '/watches/watch-brand.json')
        .map(res => res.json())
        .toPromise().then(
            brands => {
                AnalyticsService.event('API', 'BRANDS', 'GET');
                return brands;
            }
        );
    }

    /**
     * Returns model of a given brand
     * @param  {string}  brand
     * @return {Promise}      
     */
    getModels(brand:string): Promise<[string]> {

        brand = StringHelper.replaceAll(brand, " ", "");
        brand = StringHelper.replaceAll(brand, "&", "");
        
        return this.http.get(
            TwAPIService.assetsUrl + '/watches/watch-models/' + brand + ".json")
            .map(res => res.json())
            .toPromise().then(
            models => {
                AnalyticsService.event('API', 'MODELS', 'GET');
                return models;
            }
        );
    }

    /**
     * Returns model of a given brand
     * @param  {string}  brand
     * @return {Promise}      
     */
    getCalibers(brand:string): Promise<[string]> {

        brand = StringHelper.replaceAll(brand, " ", "");
        brand = StringHelper.replaceAll(brand, "&", "");
        
        return this.http.get(
            TwAPIService.assetsUrl + '/watches/watch-calibers/' + brand + ".json")
            .map(res => res.json())
            .toPromise().then(
            calibers => {
                AnalyticsService.event('API', 'CALIBERS', 'GET');
                return calibers;
            }
        );
    }

    /**
     * Gets the previously computed offset
     * @return {number} [description]
     */
    getOffsetTime():number {
        return TwAPIService.time.offset;
    }

    /**
     * Retrieve atomic clock time adjusted for network latency
     * @param  {()=>void} statusCallback Called at each partial complete
     * @param  {number = 0} precison How many calls we want to aveage
     * @return {Promise<Date>} 
     */
    accurateTime(statusCallback?:()=>void, precison:number = 10): Promise<Date> {

        AnalyticsService.event('API', 'TIME', 'GET');
        let now = require("performance-now");

        //If we aren't already sync'ed
        //or sync is older than 2 minutes
        if(TwAPIService.time === undefined || 
            now() - TwAPIService.time.syncAnchor > 2*60*1000) {
            //Stores each Promise in array
            let promises:Promise<number>[] = [];
            for (var i = 0; i < precison; ++i) {
                promises.push(this.fetchTime(statusCallback));
            }

            /**
             * Promise.all() is the Promise equivalent of thread.join().
             * It'll wait for all promises to be received. 
             *
             * Returns a date adjusted w/ the median offset between 
             * atomic clock and js time. 
             * The offset received in each promise also accounts for
             * the network roundtrip time.
             */
            return Promise.all(promises).then((results:any[]) => {
                results.sort(function(a: any, b: any) { return a - b; });

                //Remove the outliers. 10% best & 10% worst
                results = results.slice(
                    Math.round(results.length*0.1), 
                    results.length - 1 - Math.round(results.length*0.1)
                );

                //Compute average
                let sum = results = results.reduce((previous, current) => current += previous);
                let averageOffset = sum / results.length;

                TwAPIService.time = {
                    syncDate: new Date(Date.now() - averageOffset),
                    syncAnchor: now(),
                    offset:averageOffset
                };

                return TwAPIService.time.syncDate;
            });
        //Only compute the difference from last time;
        } else {

            TwAPIService.time.syncDate = new Date(
                TwAPIService.time.syncDate.getTime() +
                now() - TwAPIService.time.syncAnchor
            );
            
            TwAPIService.time.syncAnchor = now();

            return new Promise<Date>(
                (resolve, reject) => { 
                    resolve(TwAPIService.time.syncDate); 
                }
            );
        }
    }

    /** 
     * Fetch offset between atomic clock and js time
     * @param {() => void} statusCallback
     */
    public fetchTime(statusCallback?: () => void): Promise<number> {

        let beforeTime: number = window.performance.now();
        return this.http.get(TwAPIService.baseUrl + "time", TwAPIService.optionsGet)
            .toPromise()
            .then(
                response => {
                    if (statusCallback !== undefined) {
                        statusCallback();
                    }

                    let now: number = window.performance.now();
                    let timeDiff = (now - beforeTime) / 2;
                    let serverTime = response.json().time - timeDiff;
                    return Date.now() - serverTime;
                }, 
                reject => console.error(reject)
        ).catch(this.handleError);
    }

    /**
     * Update a measure and the watch it belongs to
     * @param  {Watch}          watch  
     * @param  {Measure}        measure
     * @return {Promise<Watch>}        
     */
    private updateMeasure(watch: Watch, measure: Measure): Promise<Watch> {
        return this.http.put(
            TwAPIService.baseUrl + "measures",
            JSON.stringify({
                measureId: measure.id,
                referenceTime: measure.accuracyReferenceTime,
                userTime: measure.accuracyUserTime
            }),
            TwAPIService.options
        ).toPromise().then(
            response => {
                AnalyticsService.event('API', 'MEASURE', 'SECOND');
                let json = response.json().result;
                measure.addAccuracy(json.accuracy, json.accuracyAge, json.percentile);
                watch.upsertMeasure(measure);
                watch.next = WatchAction.Measure;
                return watch;
            }
        ).catch(this.handleError);
    }

    /**
     * Insert a measure and the watch it belongs to
     * @param  {Watch}          watch  
     * @param  {Measure}        measure
     * @return {Promise<Watch>}        
     */
    private insertMeasure(watch: Watch, measure: Measure): Promise<Watch> {
        return this.http.post(
            TwAPIService.baseUrl + "measures",
            JSON.stringify({
                watchId: watch.id,
                referenceTime: measure.measureReferenceTime,
                userTime: measure.measureUserTime
            }),
            TwAPIService.options
        ).toPromise().then(
            response => {
                AnalyticsService.event('API', 'MEASURE', 'FIRST');
                measure.id = response.json().measureId;
                watch.measures.push(measure);
                watch.historySize++;
                return watch;
            }
        ).catch(this.handleError);
    }

    /**
     * Insert a watch
     * @param  {Watch}          watch
     * @return {Promise<Watch>}      
     */
    private insertWatch(watch: Watch):Promise<Watch> {
        return this.http.post(
            TwAPIService.baseUrl + "watches",
            JSON.stringify({
                brand: watch.brand,
                name: watch.name,
                yearOfBuy: watch.yearOfBuy,
                serial: watch.serial,
                caliber: watch.caliber
            }),
            TwAPIService.options
        )
        .map((res) => { 

            return new Watch(
                    res.json().id, watch.brand, 0, [], watch.name, watch.yearOfBuy, watch.serial, watch.caliber); 
        })
        .toPromise().then(
            response => {
                return response;
            }
        );
    }

    /**
     * Update a watch
     * @param  {Watch}          watch
     * @return {Promise<Watch>}      
     */
    private updateWatch(watch: Watch): Promise<Watch> {
        return this.http.put(
            TwAPIService.baseUrl + "watches",
            JSON.stringify({
                id: watch.id,
                brand: watch.brand,
                name: watch.name,
                yearOfBuy: watch.yearOfBuy,
                serial: watch.serial,
                caliber: watch.caliber
            }),
            TwAPIService.options
        ).toPromise().then(
            response => {
                AnalyticsService.event('API', 'WATCH', 'UPDATE');
                return watch;
            }
        );
    }


    /**
     * Log error to console
     * @param {any} error [description]
     */
    private handleError(error: any) {
        console.error('An error occurred', error || "plop");
        return Promise.reject(error.message || error);
    }

}

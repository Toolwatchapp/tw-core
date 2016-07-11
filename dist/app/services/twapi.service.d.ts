import { Http } from '@angular/http';
import { User } from './../models/user.model';
import { Watch } from './../models/watch.model';
import { Measure } from './../models/measure.model';
import { BlogPost } from './../models/blog-post.model';
import 'rxjs/add/operator/toPromise';
export declare class TwAPIService {
    private http;
    /**
     * All the HTTP code used by the toolwatch API are defined here.
     * Http codes can be to refine the error types
     */
    static HTTP_CONTINUE: number;
    static HTTP_SWITCHING_PROTOCOLS: number;
    static HTTP_PROCESSING: number;
    /**
     * The request has succeeded
     */
    static HTTP_OK: number;
    /**
     * The server successfully created a new resource
     */
    static HTTP_CREATED: number;
    static HTTP_ACCEPTED: number;
    static HTTP_NON_AUTHORITATIVE_INFORMATION: number;
    /**
     * The server successfully processed the request, though no content is returned
     */
    static HTTP_NO_CONTENT: number;
    static HTTP_RESET_CONTENT: number;
    static HTTP_PARTIAL_CONTENT: number;
    static HTTP_MULTI_STATUS: number;
    static HTTP_ALREADY_REPORTED: number;
    static HTTP_IM_USED: number;
    static HTTP_MULTIPLE_CHOICES: number;
    static HTTP_MOVED_PERMANENTLY: number;
    static HTTP_FOUND: number;
    static HTTP_SEE_OTHER: number;
    /**
     * The resource has not been modified since the last request
     */
    static HTTP_NOT_MODIFIED: number;
    static HTTP_USE_PROXY: number;
    static HTTP_RESERVED: number;
    static HTTP_TEMPORARY_REDIRECT: number;
    static HTTP_PERMANENTLY_REDIRECT: number;
    /**
     * The request cannot be fulfilled due to multiple errors
     */
    static HTTP_BAD_REQUEST: number;
    /**
     * The user is unauthorized to access the requested resource
     */
    static HTTP_UNAUTHORIZED: number;
    static HTTP_PAYMENT_REQUIRED: number;
    /**
     * The requested resource is unavailable at this present time
     */
    static HTTP_FORBIDDEN: number;
    /**
     * The requested resource could not be found
     *
     * Note: This is sometimes used to mask if there was an UNAUTHORIZED (401) or
     * FORBIDDEN (403) error, for security reasons
     */
    static HTTP_NOT_FOUND: number;
    /**
     * The request method is not supported by the following resource
     */
    static HTTP_METHOD_NOT_ALLOWED: number;
    /**
     * The request was not acceptable
     */
    static HTTP_NOT_ACCEPTABLE: number;
    static HTTP_PROXY_AUTHENTICATION_REQUIRED: number;
    static HTTP_REQUEST_TIMEOUT: number;
    /**
     * The request could not be completed due to a conflict with the current state
     * of the resource
     */
    static HTTP_CONFLICT: number;
    static HTTP_GONE: number;
    static HTTP_LENGTH_REQUIRED: number;
    static HTTP_PRECONDITION_FAILED: number;
    static HTTP_REQUEST_ENTITY_TOO_LARGE: number;
    static HTTP_REQUEST_URI_TOO_LONG: number;
    static HTTP_UNSUPPORTED_MEDIA_TYPE: number;
    static HTTP_REQUESTED_RANGE_NOT_SATISFIABLE: number;
    static HTTP_EXPECTATION_FAILED: number;
    static HTTP_I_AM_A_TEAPOT: number;
    static HTTP_UNPROCESSABLE_ENTITY: number;
    static HTTP_LOCKED: number;
    static HTTP_FAILED_DEPENDENCY: number;
    static HTTP_RESERVED_FOR_WEBDAV_ADVANCED_COLLECTIONS_EXPIRED_PROPOSAL: number;
    static HTTP_UPGRADE_REQUIRED: number;
    static HTTP_PRECONDITION_REQUIRED: number;
    static HTTP_TOO_MANY_REQUESTS: number;
    static HTTP_REQUEST_HEADER_FIELDS_TOO_LARGE: number;
    /**
     * The server encountered an unexpected error
     *
     * Note: This is a generic error message when no specific message
     * is suitable
     */
    static HTTP_INTERNAL_SERVER_ERROR: number;
    /**
     * The server does not recognise the request method
     */
    static HTTP_NOT_IMPLEMENTED: number;
    static HTTP_BAD_GATEWAY: number;
    static HTTP_SERVICE_UNAVAILABLE: number;
    static HTTP_GATEWAY_TIMEOUT: number;
    static HTTP_VERSION_NOT_SUPPORTED: number;
    static HTTP_VARIANT_ALSO_NEGOTIATES_EXPERIMENTAL: number;
    static HTTP_INSUFFICIENT_STORAGE: number;
    static HTTP_LOOP_DETECTED: number;
    static HTTP_NOT_EXTENDED: number;
    static HTTP_NETWORK_AUTHENTICATION_REQUIRED: number;
    static user: User;
    private static time;
    private static headers;
    private static options;
    private baseUrl;
    static assetsUrl: string;
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
    getWatches(): Promise<Watch[]>;
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
    getBlogPosts(): Promise<BlogPost[]>;
    /**
     * Return known brands
     * @return {Promise}
     */
    getBrands(): Promise<[{
        name: string;
        icon: string;
        models: string;
    }]>;
    /**
     * Returns model of a given brand
     * @param  {string}  brand
     * @return {Promise}
     */
    getModels(brand: string): Promise<[string]>;
    /**
     * Gets the previously computed offset
     * @return {number} [description]
     */
    getOffsetTime(): number;
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

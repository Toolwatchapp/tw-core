///<reference path="../../typings/browser.d.ts"/>

import { Injectable } from '@angular/core';
import { Http, HTTP_PROVIDERS, RequestOptions, Headers }  from '@angular/http';
import { User }  from './domain/user';
import { Watch }  from './domain/watch';
import { Measure, MeasureStatus }  from './domain/measure';

import 'rxjs/add/operator/toPromise';

@Injectable()
/**
 * Exposes the Toolwatch API.
 * Returns promeses on domain objects
 */
export class TwAPIService {

	//Defines headers and request options
	private headers: Headers = new Headers({ 'Content-Type': 'application/json' });
	private options: RequestOptions = new RequestOptions({ headers: this.headers });
	
	private baseUrl:string = "http://localhost/api/";
	private static apikey:string;

	/**
	 * Inject http service
	 * @param {Http} private http 
	 */
	constructor(private http: Http) {}

	/**
	 * Log a user using email and password
	 * @param  {string}        email   
	 * @param  {string}        password
	 * @return {Promise<User>}         
	 */
	login(email: string, password: string): Promise<User> {

		let creds = { email: email, password: password };
		return this.http.put(
			this.baseUrl + "users", 
			JSON.stringify(creds), 
			this.options
		).toPromise().then(
			response => this.buildUser(response.json())
		).catch(this.handleError);
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
			this.baseUrl + "users",
			JSON.stringify({
				email: email, 
				password: password,
				name: name,
				lastname: lastname,
				country:country
			}),
			this.options
		).toPromise().then(
			response => this.buildUser(response.json())
		).catch(this.handleError);
	}

	/**
	 * Deletes the account currently logged in.
	 * @return {Promise<boolean>}
	 */
	deleteAccount():Promise<boolean>{

		return this.http.delete(
			this.baseUrl + "users",
			this.options
		).toPromise().then(
			response => true
		).catch(this.handleError);
	}

	/**
	 * Update or insert a watch
	 * @param  {Watch}          watch
	 * @return {Promise<Watch>}      
	 */
	upsertWatch(watch: Watch): Promise<Watch> {

		if(watch.id == null){
			return this.insertWatch(watch);
		}else{
			return this.updateWatch(watch);
		}
	}

	/**
	 * Deletes a watch and update the user accordingly
	 * @param  {User}          user  
	 * @param  {Watch}         watch 
	 * @return {Promise<User>}       
	 */
	deleteWatch(user:User, watch:Watch):Promise<User>{
		let deleteOptions = new RequestOptions({ headers: this.headers });
		deleteOptions.body = JSON.stringify({ watchId: watch.id });

		return this.http.delete(
			this.baseUrl + "watches",
			deleteOptions
		).toPromise().then(
			response => {

				user.watches = user.watches.filter(
					function(filter: Watch) {
						return filter.id != watch.id;
					}
				);

				return user;
			}
		).catch(this.handleError);
	}

	/**
	 * Insert or update a measure and the related watch
	 * @param  {Watch}          watch  
	 * @param  {Measure}        measure
	 * @return {Promise<Watch>}        
	 */
	upsertMeasure(watch: Watch, measure: Measure): Promise<Watch> {
		if(measure.id == null){
			return this.insertMeasure(watch, measure);
		}else{
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

		let deleteOptions = new RequestOptions({ headers: this.headers });
		deleteOptions.body = JSON.stringify({measureId:measure.id});

		return this.http.delete(
			this.baseUrl + "measures",
			deleteOptions
		).toPromise().then(
			response => {

				watch.measures = watch.measures.filter(
					function(filter: Measure) {
						return filter.id != measure.id;
					}
				);
				return watch;
			}
		).catch(this.handleError);
	}

	/**
	 * Retrieve atomic clock time adjusted for network latency
	 * @param  {()=>void} statusCallback Called at each partial complete
	 * @param  {number = 0} precison How many calls we want to aveage
	 * @return {Promise<Date>} 
	 */
	accurateTime(statusCallback?:()=>void, 
		precison:number = 10): Promise<Date>{

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

			let half: number = Math.floor(results.length / 2);
			let medianOffset;

			if (results.length % 2) {
				medianOffset = results[half];
			} else {
				medianOffset = (results[half - 1] + results[half]) / 2.0;
			}

			return new Date(Date.now() - medianOffset);
		});
	}

	/**
	 * Fetch offset between atomic clock and js time
	 * @param {() => void} statusCallback
	 */
	private fetchTime(statusCallback?: () => void)
		: Promise<number> {

		let beforeTime: number = Date.now();
		return this.http.get(
			this.baseUrl + "time",
			this.options).toPromise().then(
			response => {

				if (statusCallback !== undefined){
					statusCallback();
				}

				let now: number = Date.now();
				let timeDiff = (now - beforeTime) / 2;
				let serverTime = response.json().time - timeDiff;
				return Date.now() - serverTime;
			}
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
			this.baseUrl + "measures",
			JSON.stringify({
				measureId: measure.id,
				referenceTime: measure.accuracyReferenceTime,
				userTime: measure.accuracyUserTime
			}),
			this.options
		).toPromise().then(
			response => {
				let json = response.json();
				measure.addAccuracy(json.accuracy, json.accuracyAge, json.percentile);
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
			this.baseUrl + "measures",
			JSON.stringify({
				watchId: watch.id,
				referenceTime: measure.measureReferenceTime,
				userTime: measure.measureUserTime
			}),
			this.options
		).toPromise().then(
			response => {
				measure.id = response.json().measureId;
				watch.measures.push(measure);
				return watch;
			}
		).catch(this.handleError);
	}

	/**
	 * Insert a watch
	 * @param  {Watch}          watch
	 * @return {Promise<Watch>}      
	 */
	private insertWatch(watch: Watch):Promise<Watch>{
		return this.http.post(
			this.baseUrl + "watches",
			JSON.stringify({
				brand: watch.brand,
				name:watch.name,
				yearOfBuy:watch.yearOfBuy,
				serial: watch.serial,
				caliber:watch.caliber
			}),
			this.options
		).toPromise().then(
			response => {
				watch.id = response.json().id;
				return watch;
			}
		).catch(this.handleError);
		
	}

	/**
	 * Update a watch
	 * @param  {Watch}          watch
	 * @return {Promise<Watch>}      
	 */
	private updateWatch(watch: Watch): Promise<Watch> {
		return this.http.put(
			this.baseUrl + "watches",
			JSON.stringify({
				id: watch.id,
				brand: watch.brand,
				name: watch.name,
				yearOfBuy: watch.yearOfBuy,
				serial: watch.serial,
				caliber: watch.caliber
			}),
			this.options
		).toPromise().then(
			response => {
				return watch;
			}
		).catch(this.handleError);
	}

	/**
	 * Builds an User from json response
	 * @param  {any}  jsonUser
	 * @return {User}         
	 */
	private buildUser(jsonUser:any):User{
		if(jsonUser.key !== undefined){
			TwAPIService.apikey = jsonUser.key;
			this.headers.delete('X-API-KEY');
			this.headers.append('X-API-KEY', TwAPIService.apikey);
		}
		return new User(
			jsonUser.userId,
			jsonUser.email,
			jsonUser.firstname,
			jsonUser.name,
			jsonUser.country,
			jsonUser.registerDate,
			jsonUser.key,
			this.buildWatches(jsonUser.watches)
		);
	}

	/**
	 * Builds a watch from json response
	 * @param  {any}     jsonWatches
	 * @return {Watch[]}            
	 */
	private buildWatches(jsonWatches:any):Watch[]{
		return jsonWatches.map(function(jsonWatch) {
			return new Watch(
				jsonWatch.watchId,
				jsonWatch.brand,
				jsonWatch.historySize,
				jsonWatch.measures.map(function(jsonMeasure) {
					return new Measure(
						jsonMeasure.id,
						jsonMeasure.measureUserTime,
						jsonMeasure.measureReferenceTime,
						jsonMeasure.status,
						jsonMeasure.accuracyUserTime,
						jsonMeasure.accuracyReferenceTime,
						jsonMeasure.accuracy,
						jsonMeasure.accuracyAge)
				}),
				jsonWatch.name,
				jsonWatch.yearOfBuy,
				jsonWatch.serial,
				jsonWatch.caliber
			)
		});
	}

	/**
	 * Log error to console
	 * @param {any} error [description]
	 */
	private handleError(error: any) {
		// In a real world app, we might use a remote logging infrastructure
		// We'd also dig deeper into the error to get a better message
		let errMsg = (error.message) ? error.message :
			error.status ? `${error.status} - ${error.statusText}` : 'Server error';
		console.error(errMsg); // log to console instead
		return error;
	}

}
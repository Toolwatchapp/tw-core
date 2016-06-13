///<reference path="../../typings/browser.d.ts"/>

import { Injectable } from '@angular/core';
import { Http, HTTP_PROVIDERS, RequestOptions, Headers }  from '@angular/http';
import { User }  from './domain/user';
import { Watch }  from './domain/watch';
import { Measure }  from './domain/measure';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class TwAPIService {

	private headers: Headers = new Headers({ 'Content-Type': 'application/json' });
	private options: RequestOptions = new RequestOptions({ headers: this.headers });
	private baseUrl:string = "http://localhost/api/";

	constructor(private http: Http) {}

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



	private buildUser(jsonUser:any):User{
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

	private buildWatches(jsonWatches:any):Watch[]{
		return jsonWatches.map(function(jsonWatch) {
			return new Watch(
				jsonWatch.watchId,
				jsonWatch.brand,
				jsonWatch.historySize,
				this.buildMeasures(jsonWatch.measures),
				jsonWatch.name,
				jsonWatch.yearOfBuy,
				jsonWatch.serial,
				jsonWatch.caliber
			)
		});
	}

	private buildMeasures(jsonMeasures:any):Measure[]{
		return jsonMeasures.map(function(jsonMeasure) {
			return new Measure(
				jsonMeasure.id,
				jsonMeasure.measureUserTime,
				jsonMeasure.measureReferenceTime,
				jsonMeasure.status,
				jsonMeasure.accuracyUserTime,
				jsonMeasure.accuracyReferenceTime,
				jsonMeasure.accuracy,
				jsonMeasure.accuracyAge)
		});
	}

	private handleError(error: any) {
		// In a real world app, we might use a remote logging infrastructure
		// We'd also dig deeper into the error to get a better message
		let errMsg = (error.message) ? error.message :
			error.status ? `${error.status} - ${error.statusText}` : 'Server error';
		console.error(errMsg); // log to console instead
	}

}

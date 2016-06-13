///<reference path="../../typings/browser.d.ts"/>

import { Injectable } from '@angular/core';
import {Http, HTTP_PROVIDERS, RequestOptions, Headers}  from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class TwAPIService {

	private headers: Headers = new Headers({ 'Content-Type': 'application/json' });
	private options: RequestOptions = new RequestOptions({ headers: this.headers });
	private baseUrl:string = "http://localhost/api/";

	constructor(private http: Http) {
		// this.headers.
		// this.headers.append('Content-Type', 'application/x-www-form-urlencoded');
	}

	login(email: string, password: string): Promise<any> {

		let creds = { email: email, password: password };

		return this.http.put(
			this.baseUrl + "users", 
			JSON.stringify(creds), 
			this.options
		).toPromise().then(
			response => console.log(response)
		).catch(this.handleError);
	}

	private handleError(error: any) {
		// In a real world app, we might use a remote logging infrastructure
		// We'd also dig deeper into the error to get a better message
		let errMsg = (error.message) ? error.message :
			error.status ? `${error.status} - ${error.statusText}` : 'Server error';
		console.error(errMsg); // log to console instead
	}

}

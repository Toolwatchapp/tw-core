import { Component } from '@angular/core';
import {TwAPIService} from './twapi.service'
import {Http, HTTP_PROVIDERS, Headers}  from '@angular/http';
import { User } from './domain/user';
import { Watch } from './domain/watch';
import { Measure } from './domain/measure';

@Component({
  moduleId: module.id,
  selector: 'api-client-app',
  templateUrl: 'api-client.component.html',
  styleUrls: ['api-client.component.css'],
  providers: [TwAPIService, HTTP_PROVIDERS]
})
export class ApiClientAppComponent {
  title = 'api-client works!';
  tests:Test[] = [];
  static niark:Watch;

  constructor(private twapi:TwAPIService){


	let tLogin = new Test('Test Login', 
		function(){
		twapi.login('mathieu.nayrolles@gmail.com', 'qwerty').then(
			response => {
				if (response.id != null && response.watches.length === 4) {
					tLogin.stop(true);
				} else {
					tLogin.stop(false);
				}
			}
		);
	});
	this.tests.push(tLogin);


	let tFailLogin = new Test('Test Login Fail', 
		function(){
			twapi.login('mathieu.nayrolles@gmail.com', 'awdawd').then(
				response => {
					if (typeof response != "User") {
						tFailLogin.stop(true);
					} else {
						tFailLogin.stop(false);
					}
				}
			);
		}
	);
	this.tests.push(tFailLogin);
	
	let tEmailTaken = new Test('Test signup fail', 
		function () {
			twapi.signup('mathieu.nayrolles@gmail.com', 'awdawd').then(
				response => {
					if (typeof response != "User") {
						tEmailTaken.stop(true);
					} else {
						tEmailTaken.stop(false);
					}
				}
			);
	});
	this.tests.push(tEmailTaken);


	//Success
	let tSignup = new Test('Test signup',
		function() {
			twapi.signup('mathieu.nayrolles@viacesi.fr', 'awdawd').then(
			response => {

				if (response.email != undefined) {
					tSignup.stop(true);
				} else {
					tSignup.stop(false);
				}
			}
	)});
	this.tests.push(tSignup);

	//Success
	let tLoginNewAccount = new Test('Test login in new account',
		function() {
			twapi.login('mathieu.nayrolles@viacesi.fr', 'awdawd').then(
				response => {
					if (response.email != undefined) {
						tLoginNewAccount.stop(true);
					} else {
						tLoginNewAccount.stop(false);
					}
				}
			)
		});
	this.tests.push(tLoginNewAccount);

	let tAddWatch = new Test("Add a Watch", 
		function(){

			
			twapi.upsertWatch(new Watch(null, "JLC")).then(
				response => {
					if (response.id != null) {
						tAddWatch.stop(true, response);
					} else {
						tAddWatch.stop(false);
					}
				}
			)
	});
	this.tests.push(tAddWatch);

	let tUpdateWatch = new Test("Update Watch",
		function(data:any){
			console.log("outside", data);
			if (data != null) {
				twapi.upsertWatch(data).then(
					response => {
						if (response.id != null) {
							tUpdateWatch.stop(true, response);
						} else {
							tUpdateWatch.stop(false);
						}
					}
				)
			}else{
				tUpdateWatch.stop(false);
			}
		}
	);
	this.tests.push(tUpdateWatch);

	let tAddBaseMeasure = new Test('Add Base Measure', 
		function(watch:Watch){

			if(watch != null){

				twapi.upsertMeasure(watch, new Measure(null, Date.now()+10, Date.now()+2)).then(
					response => {
						if (response != null && response.measures.length == 1) {
							tAddBaseMeasure.stop(true, response);
						} else {
							tAddBaseMeasure.stop(false);
						}
					}
				)

			}else{
				tAddBaseMeasure.stop(false);
			}
	});
	this.tests.push(tAddBaseMeasure);

	let tAddAccuracyMeasure = new Test('Add accuracy measure',
		function(watch:Watch){

			if (watch != null) {

				watch.measures[watch.measures.length - 1].addAccuracyMeasure(Date.now()+20, Date.now()+5);
				twapi.upsertMeasure(watch, watch.measures[watch.measures.length - 1]).then(
					response => {
						if (response != null && response.measures.length == 1) {
							tAddAccuracyMeasure.stop(true, response);
						} else {
							tAddAccuracyMeasure.stop(false);
						}
					}
				)

			} else {
				tAddAccuracyMeasure.stop(false);
			}

	});
	this.tests.push(tAddAccuracyMeasure);


	let tDeleteMeasure = new Test('Delete measure',
		function(watch: Watch) {



			if (watch != null) {

				twapi.deleteMeasure(watch, watch.measures[watch.measures.length - 1]).then(
					response => {
						console.log('response delete', response);
						if (response != null && response.measures.length == 0) {
							tDeleteMeasure.stop(true, response);
						} else {
							tDeleteMeasure.stop(false);
						}
					}
				)

			} else {
				tDeleteMeasure.stop(false);
			}

		});
	this.tests.push(tDeleteMeasure);

	let tDeleteAccountTest = new Test('Delete Account', 
		function(){

			twapi.deleteAccount().then(
				response => {
					if (response === true) {
						tDeleteAccountTest.stop(true);
					} else {
						tDeleteAccountTest.stop(false);
					}
				}
	)});
	this.tests.push(tDeleteAccountTest);


	tLogin.next = tFailLogin;
	tFailLogin.next = tEmailTaken;
	tEmailTaken.next = tSignup;
	tSignup.next = tLoginNewAccount;
	tLoginNewAccount.next = tAddWatch;
	tAddWatch.next = tUpdateWatch;
	tUpdateWatch.next = tAddBaseMeasure;
	tAddBaseMeasure.next = tAddAccuracyMeasure;
	tAddAccuracyMeasure.next = tDeleteMeasure;
	tDeleteMeasure.next = tDeleteAccountTest;

	tLogin.test(null);

  }
}

export class Test{
	title:string;
	running:boolean = true;
	status:boolean = false;
	startTime:number;
	ellapsedTime:number;
	test: (data:any) => void;
	next:Test;

	constructor(title: string, test: (data?: any) => void) {
		this.title = title;
		this.test = function(data){
			this.startTime = Date.now();
			test(data);
		};
	}

	stop(success:boolean, toNextTest:any = null){
		this.status = success;
		this.running = false;
		this.ellapsedTime = Date.now() - this.startTime;
		if(this.next != null){
			this.next.test(toNextTest);
		}
	}
}
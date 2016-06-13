import { Component } from '@angular/core';
import {TwAPIService} from './twapi.service'
import {Http, HTTP_PROVIDERS, Headers}  from '@angular/http';
import { User } from './domain/user';
import { Watch } from './domain/watch';


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
						tAddWatch.stop(true);
					} else {
						tAddWatch.stop(false);
					}
				}
			)
	});
	this.tests.push(tAddWatch);

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
	tAddWatch.next = tDeleteAccountTest;

	tLogin.test();

  }
}

export class Test{
	title:string;
	running:boolean = true;
	status:boolean = false;
	startTime:number;
	ellapsedTime:number;
	test:any;
	next:Test;

	constructor(title: string, test: any) {
		this.title = title;
		this.test = function(){
			this.startTime = Date.now();
			test();
		};
	}

	stop(success:boolean){
		this.status = success;
		this.running = false;
		this.ellapsedTime = Date.now() - this.startTime;
		if(this.next != null){
			this.next.test();
		}
	}
}
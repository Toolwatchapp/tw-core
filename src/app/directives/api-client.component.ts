import { Component } from '@angular/core';
import {TwAPIService} from './../services/twapi.service'
import {Http, HTTP_PROVIDERS, Headers}  from '@angular/http';
import { User } from './../models/user.model';
import { Watch } from './../models/watch.model';
import { Measure } from './../models/measure.model';
import { Wove, beforeMethod, Metadata } from 'aspect.js/dist/lib/aspect';



@Wove()
@Component({
  selector: 'api-client-app',
  templateUrl: 'api-client.component.html',
  styleUrls: ['api-client.component.css'],
  providers: [TwAPIService, HTTP_PROVIDERS]
})
export class ApiClientAppComponent {
  title = 'api-client works!';
  static niark:Watch;

  constructor(){

  }

  onClick(){
  	console.log("awdawd");
  }

}

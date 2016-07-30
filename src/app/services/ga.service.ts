import { Injectable } from '@angular/core';
import './analytics';
declare let ga;

@Injectable()
export class GAService {

  public static appName:string;
  public static appVersion:string;
  private static gaCreated:boolean = false;

  private static spawn(){

      if(!GAService.gaCreated){
        ga('create', 'UA-59148878-1', 'auto');
        GAService.gaCreated = true;
      }
  }

  public static event(eventCategory:string, eventAction:string, eventLabel:string='', eventValue:number=0){
    GAService.spawn();
    ga('send', 'event', eventCategory, eventAction, eventLabel, eventValue);
  }

  public static screenview(screenName:string){

    if(GAService.appName == undefined || GAService.appVersion == undefined){
        throw "App not configured";
    }

    GAService.spawn();
    ga('send', 'screenview', {
      'appName': GAService.appName,
      'appVersion': GAService.appVersion,
      'screenName': screenName
    });
  }

  public static pageview(page:string){
    GAService.spawn();
    ga('set', 'page', page);
    ga('send', 'pageview')
  }


}

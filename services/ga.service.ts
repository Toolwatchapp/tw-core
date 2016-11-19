import { Injectable } from '@angular/core';
// import { Analytics } from './analytics';
declare let ga;
declare let gaNewElem;
declare let gaElems;
declare let currdate;

@Injectable()
export class GAService {

  public static appName:string;
  public static appVersion:string;
  private static gaCreated:boolean = false;



  private static spawn(){

      if(!GAService.gaCreated){
        /* tslint:disable:no-string-literal */
        /* tslint:disable:semicolon */
        /* tslint:disable:no-unused-expression */
        // This code is from Google, so let's not modify it too much, just add gaNewElem and gaElems:

        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*currdate;a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,'script','//www.google-analytics.com/analytics.js','ga', gaNewElem, gaElems);
        
        /* tslint:enable:no-unused-expression */
        /* tslint:enable:semicolon */
        /* tslint:enable:no-string-literal */
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

import { Injectable } from '@angular/core';
// import { Analytics } from './analytics';
declare let ga;

@Injectable()
export class GAService {

  public static appName:string;
  public static appVersion:string;
  public static userName:string;
  public static userEmail:string;
  private static gaCreated:boolean = false;



  private static spawn(){

      if(!GAService.gaCreated){
        var currdate : any = new Date();
        var gaNewElem : any = {};
        var gaElems : any = {};

        /* tslint:disable:no-string-literal */
        /* tslint:disable:semicolon */
        /* tslint:disable:no-unused-expression */
        // This code is from Google, so let's not modify it too much, just add gaNewElem and gaElems:

        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*currdate;a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,'script','https://www.google-analytics.com/analytics.js','ga', gaNewElem, gaElems);
        
        /* tslint:enable:no-unused-expression */
        /* tslint:enable:semicolon */
        /* tslint:enable:no-string-literal */
        ga('create', 'UA-59148878-1', 'app.toolwatch.io');
        GAService.gaCreated = true;
      }
  }

  public static event(eventCategory:string, eventAction:string, eventLabel:string='', eventValue:number=0){
    GAService.spawn();
    ga('send', 'event', eventCategory, eventAction, eventLabel, eventValue);
  }

  public static screenview(screenName:string){

    //appVersion and appName are handled by ionic-native promises on mobile
    //In case the promises are still working, we timeout the call by 1s.
    if(GAService.appName == undefined || GAService.appVersion == undefined){
        console.log("GAService isn't configured yet. Postponing call", GAService.appName, GAService.appVersion);
        setTimeout(()=>{
          GAService.screenview(screenName);
        }, 1000);
    }else{
      GAService.spawn();
      ga('send', 'screenview', {
        'appName': GAService.appName,
        'appVersion': GAService.appVersion,
        'screenName': screenName
      });
    }
  }

  public static pageview(page:string){
    GAService.spawn();
    ga('set', 'page', page);
    ga('send', 'pageview')
  }


}

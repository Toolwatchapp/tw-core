import { Injectable } from '@angular/core';

@Injectable()
/**
 * Exposes the Toolwatch API.
 * Returns promeses on domain objects
 */
export class AnalyticsService {


    public event(domain:string, path:string, method:string = ""):void {

    }

}
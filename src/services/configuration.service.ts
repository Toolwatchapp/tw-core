import { Injectable } from '@angular/core';

@Injectable()
/**
 * Exposes the Toolwatch API.
 * Returns promeses on domain objects
 */
export class ConfigurationService {

    private baseUrl: string;
    private assetsUrl: string;

    public getAPIUrl(): string {
        return this.baseUrl;
    }

    public getAssetsUrl(): string {
        return this.assetsUrl;
    }


}

export function configurationProvider(
    baseUrl: string = "https://toolwatch.io/api/",
    assetsUrl: string = "assets"): ConfigurationService {

    let cs = new ConfigurationService();
    (cs as any).baseUrl = baseUrl;
    (cs as any).assetsUrl = assetsUrl;
    return cs;
}
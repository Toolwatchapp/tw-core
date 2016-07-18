import './analytics';
export declare class GAService {
    static appName: string;
    static appVersion: string;
    private static gaCreated;
    private static spawn();
    static event(eventCategory: string, eventAction: string, eventLabel?: string, eventValue?: number): void;
    static screenview(screenName: string): void;
    static pageview(page: string): void;
}

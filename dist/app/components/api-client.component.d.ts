import { TwAPIService } from './../services/twapi.service';
import { Watch } from './../models/watch.model';
export declare class ApiClientAppComponent {
    private twapi;
    title: string;
    tests: Test[];
    static niark: Watch;
    constructor(twapi: TwAPIService);
}
export declare class Test {
    title: string;
    running: boolean;
    status: boolean;
    startTime: number;
    ellapsedTime: number;
    test: (data: any) => void;
    next: Test;
    constructor(title: string, test: (data?: any) => void);
    stop(success: boolean, toNextTest?: any): void;
}

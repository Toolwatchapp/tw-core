import { AnalyticsService } from './../../src/services/analytics.service';
import { ReflectiveInjector } from '@angular/core';

describe('String helper', () => {

    let analytics: AnalyticsService;

    beforeEach(() => {
        this.injector = ReflectiveInjector.resolveAndCreate([
            AnalyticsService
        ]);
        analytics = this.injector.get(AnalyticsService);
    });

    it("should do nothing", () => {

        expect(analytics.event("a", "b", "c")).toBeUndefined();
    });


    it("should do nothing", () => {

        expect(analytics.screenview("a")).toBeUndefined();
    });

    it("should get/set appName", () => {
        analytics.appName = "appName";
        expect(analytics.appName).toBe("appName");
    });

    it("should get/set appVersion", () => {
        analytics.appVersion = "appVersion";
        expect(analytics.appVersion).toBe("appVersion");
    });

    it("should get/set userName", () => {
        analytics.userName = "userName";
        expect(analytics.userName).toBe("userName");
    });

    it("should get/set userEmail", () => {
        analytics.userEmail = "userEmail";
        expect(analytics.userEmail).toBe("userEmail");
    });

});
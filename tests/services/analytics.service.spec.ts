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

});
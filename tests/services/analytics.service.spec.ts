import { AnalyticsService } from './../../src/services/analytics.service';

describe('String helper', () => {

    it("should do nothing", () => {

        expect(AnalyticsService.event("a", "b", "c")).toBeUndefined();
    });

});
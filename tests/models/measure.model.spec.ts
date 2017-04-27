import { Measure } from './../../src/models/measure.model';
import { MeasureStatus } from './../../src/models/measure.model';

describe('Measure model', () => {

    it("should be properly constructed", () => {

        let measure1 = new Measure(1, Date.now() / 1000, Date.now() / 1000, 1);

        expect(measure1.id).toEqual(1);
        expect(measure1.measureUserTime).toBeCloseTo(Date.now() / 1000);
        expect(measure1.measureReferenceTime).toBeCloseTo(Date.now() / 1000);
        expect(measure1.status).toEqual(1);
    });

    it("should construct a measure with status MeasureStatus.ShouldBeRenewed", () => {

        let measure1 = new Measure(
            1,
            Date.now() / 1000,
            Date.now() / 1000,
            0,
            Date.now() / 1000,
            Date.now() / 1000,
            1,
            35,
            10
        );

        expect(measure1.id).toEqual(1);
        expect(measure1.measureUserTime).toBeCloseTo(Date.now() / 1000);
        expect(measure1.measureReferenceTime).toBeCloseTo(Date.now() / 1000);
        expect(measure1.status).toEqual(MeasureStatus.ShouldBeRenewed);
    });

    it("should construct a measure with status MeasureStatus.ShouldBeServiced", () => {

        let measure1 = new Measure(
            1,
            Date.now() / 1000,
            Date.now() / 1000,
            0,
            Date.now() / 1000,
            Date.now() / 1000,
            30,
            10,
            10
        );

        expect(measure1.id).toEqual(1);
        expect(measure1.measureUserTime).toBeCloseTo(Date.now() / 1000);
        expect(measure1.measureReferenceTime).toBeCloseTo(Date.now() / 1000);
        expect(measure1.status).toEqual(MeasureStatus.ShouldBeServiced);
    });


    it("should add a base measure", () => {

        let measure1 = new Measure(1,0,0);
        measure1.addBaseMeasure(Date.now() / 1000, Date.now() / 1000);
        expect(measure1.measureUserTime).toBeCloseTo(Date.now() / 1000);
        expect(measure1.measureReferenceTime).toBeCloseTo(Date.now() / 1000);
        expect(measure1.status).toBeCloseTo(MeasureStatus.BaseMeasure);
    });

    it("should add an accuracy measure", () => {

        let measure1 = new Measure(1,0,0);
        measure1.addAccuracyMeasure(Date.now() / 1000, Date.now() / 1000);
        expect(measure1.accuracyReferenceTime).toBeCloseTo(Date.now() / 1000);
        expect(measure1.accuracyUserTime).toBeCloseTo(Date.now() / 1000);
        expect(measure1.status).toBeCloseTo(MeasureStatus.AccuracyMeasure);
    });

    it("should add the accuracy to a measure", () => {

        let measure1 = new Measure(1,0,0);
        measure1.addAccuracy(10,5,15);
        expect(measure1.accuracy).toEqual(10);
        expect(measure1.accuracyAge).toEqual(5);
        expect(measure1.percentile).toEqual(15);

    });


});
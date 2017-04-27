import { Watch } from './../../src/models/watch.model';
import { WatchStatus } from './../../src/models/watch.model';
import { WatchAction } from './../../src/models/watch.model';
import { Measure } from './../../src/models/measure.model';

describe('Watch model', () => {

    let model: Watch;

    beforeEach(() => {
        let measure1 = new Measure(1, 1, 2, 3, 1, 1, 1, 1, 1);
        let measure2 = new Measure(2, 1, 2, 3, 1, 1, 1, 1, 1);
        model = new Watch(1, "a", 2, [measure1, measure2], "a", 0);
    });

    it("should properly construct a watch", () => {

        expect(model.id).toEqual(1);
        expect(model.brand).toEqual("a");
        expect(model.yearOfBuy).toEqual(null);
        expect(model.status).toEqual(0);
    });

    it("should properly construct a watch with measures", () => {

        let measure1 = new Measure(1, 1, 2, 3, 1, 1, 1, 1, 1);
        let measure2 = new Measure(2, 1, 2, 3, 1, 1, 1, 1, 1);

        let watch = new Watch(1, "a", 5, [measure2, measure1], "b", 1, "1", "1");

        expect(watch.id).toEqual(1);
        expect(watch.brand).toEqual("a");
        expect(watch.name).toEqual("b");
        expect(watch.measures).toEqual([measure1, measure2]);
        expect(watch.initials).toEqual("ab");
        expect(watch.status).toEqual(WatchStatus.HaveMoreMeasures);

    });

    it("should return the last complete measure", () => {
        let measure1 = new Measure(1, 1, 2, 3, 1, 1, 1, 1, 1);
        let measure2 = new Measure(2, 1, 2, 3, 1, 1, 1, 1, 1);
        let measure3 = new Measure(3, 1, 1);

        let watch = new Watch(1, "a", 5, [measure2, measure1, measure3], "b", 1, "1", "1");

        expect(watch.lastCompleteMeasure()).toEqual(measure2);
        expect(watch.currentMeasure()).toEqual(measure3);

        watch = new Watch(1, "a", 0);

        expect(watch.lastCompleteMeasure()).toEqual(null);
    });

    it("should upsert measure in the watch", () => {
        let measure1 = new Measure(1, 1, 2, 3, 1, 1, 1, 1, 1);
        let measure2 = new Measure(2, 1, 2, 3, 1, 1, 1, 1, 1);
        let measure3 = new Measure(3, 1, 1);

        let watch = new Watch(1, "a", 3, [measure2, measure1, measure3], "b", 1, "1", "1");

        let measure3Updated = new Measure(3, 1, 1, 1, 1, 1, 1, 1, 1);

        watch.upsertMeasure(measure3Updated);

        let measure4 = new Measure(4, 1, 1);
        watch.upsertMeasure(measure4);
        expect(watch.measures[3]).toEqual(measure4);
        expect(watch.historySize).toEqual(4);
        expect(watch.currentMeasure()).toEqual(measure4);
    });

    it("should clone a watch", () => {
        let watch = model.clone();

        expect(watch.id).toEqual(model.id);
        expect(watch.brand).toEqual(model.brand);
        expect(watch.historySize).toEqual(model.historySize);
        expect(watch.measures).toEqual(model.measures);
        expect(watch.name).toEqual(model.name);
        expect(watch.yearOfBuy).toEqual(model.yearOfBuy);
        expect(watch.serial).toEqual(model.serial);
        expect(watch.caliber).toEqual(model.caliber);
    });

    it("should generate a string", () => {
        expect(model.toString()).toContain("Watch (id:");
    });

    it("should compute the average accuracy for a watch", () => {

        let measure1 = new Measure(1, 1, 2, 3, 1, 1, 1, 1, 1);
        let measure2 = new Measure(2, 1, 2, 3, 1, 1, 1, 1, 1);
        let watch = new Watch(1, "a", 2, [measure1, measure2], "a", 0);

        expect(watch.average(3)).toEqual("1.0");

        let measure3 = new Measure(3, 1, 1);
        watch.upsertMeasure(measure3);

        expect(watch.average(3)).toEqual("1.0");
    });


    it("should create a watch that have the WatchAction.Waiting status", () => {
        let measure1 = new Measure(1, Date.now()/1000, Date.now()/1000, 1);
        let watch = new Watch(1, "a", 1, [measure1], "a", 0);

        expect(watch.currentMeasure()).toEqual(measure1);
        expect(watch.next).toEqual(WatchAction.Waiting);
    });

    it("should create a watch that have the WatchAction.Accuracy status", () => {
        let measure1 = new Measure(1, (Date.now()/1000)-3600*13, (Date.now()/1000)-3600*13, 1);
        let watch = new Watch(1, "a", 1, [measure1], "a", 0);

        expect(watch.currentMeasure()).toEqual(measure1);
        expect(watch.next).toEqual(WatchAction.Accuracy);
    });
});
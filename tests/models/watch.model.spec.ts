import { Watch } from './../../src/models/watch.model';
import { WatchStatus } from './../../src/models/watch.model';
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




});
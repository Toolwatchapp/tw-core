import { User } from './../../src/models/user.model';
import { Watch } from './../../src/models/watch.model';

describe('User model', () => {

    let model: User;

    beforeEach(() => {
        model = new User(1, "a@a.com", "b", "c", "fra", "a", "a", []);
    });

    it('should be propertly constructed', () => {
        expect(model.id).toBe(1);
        expect(model.email).toBe("a@a.com");
        expect(model.name).toBe("b");
        expect(model.lastname).toBe("c");
        expect(model.country).toBe("fra");
        expect(model.registerDate).toBe("a");
        expect(model.key).toBe("a");
        expect(model.watches).toEqual([]);
    });

    it('should insert a new watch', () => {

        let watch = new Watch(1, "a");

        model.upsertWatch(watch);
        expect(model.watches).toEqual([watch]);
    });

    it('should insert two new watches', () => {

        let watch = new Watch(1, "a");
        model.upsertWatch(watch);

        let watch2 = new Watch(2, "a");
        model.upsertWatch(watch2);

        expect(model.watches).toEqual([watch, watch2]);
    });

    it('should update a watch', () => {

        let watch = new Watch(1, "a");
        model.upsertWatch(watch);
        watch = new Watch(1, "b");
        model.upsertWatch(watch);

        expect(model.watches).toEqual([watch]);
    });

    it('should returns a properly constructed string', () => {

        expect(model.toString().indexOf("email: a@a.com")).toBeGreaterThan(-1);
    });
});

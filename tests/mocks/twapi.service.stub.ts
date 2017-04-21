import { Watch } from './../../src/models/watch.model';
import { User } from './../../src/models/user.model';

export class TwAPIServiceStub {

    getBrands() {

        let brands = [
            { name: "Cartier", icon: "cartier.ico", models: "cartier.models" },
            { name: "Rolex", icon: "Rolex.ico", models: "Rolex.models" },
            { name: "JLC", icon: "JLC.ico", models: "JLC.models" }
        ];

        return new Promise(
            (resolve, reject) => {
                resolve(brands);
            }
        );
    }

    getModels(brand: string) {
        let models = [
            "A",
            "B",
            "C"
        ];

        return new Promise(
            (resolve, reject) => {
                resolve(models);
            }
        );
    }

    getCalibers(brand: string) {
        let calibers = [
            "1",
            "2",
            "3"
        ];

        return new Promise(
            (resolve, reject) => {
                resolve(calibers);
            }
        );
    }

    upsertWatch(watch: Watch) {

        return new Promise(
            (resolve, reject) => {

                if (watch === null) {
                    reject();
                } else {
                    if(watch.id === null || watch.id === undefined) {
                        watch.id = 1;
                    }
                    resolve(watch);
                }
            }
        );
    }

    deleteWatch(user:User, watch:Watch) {

        return new Promise(
            (resolve, reject) => {

                if (user === null) {
                    reject();
                } else {
                   
                    resolve(user);
                }
            }
        );
    }
}
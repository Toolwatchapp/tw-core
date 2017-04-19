export class TwAPIServiceStub {

    getBrands() {

        let brands = [
            { name: "Cartier", icon: "cartier.ico", models: "cartier.models" },
            { name: "Rolex", icon: "Rolex.ico", models: "Rolex.models" },
            { name: "JLC", icon: "JLC.ico", models: "JLC.models" }
        ]

        return new Promise(
            (resolve, reject) => {
                resolve(brands);
            }
        );
    }
}
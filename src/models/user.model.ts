import { Watch } from './watch.model';

export class User {
    id:number;
    email:string;
    name:string;
    lastname:string;
    country:string;
    registerDate:string; 
    key:string;
    watches:Watch[] = [];

    constructor(
        id: number,
        email: string,
        name: string,
        lastname: string,
        country: string,
        registerDate: string,
        key: string,
        watches: Watch[]) {

        this.id = id;
        this.email = email;
        this.name = name;
        this.lastname = lastname;
        this.country = country;
        this.registerDate = registerDate;
        this.key = key;
        this.watches = watches;
    }

    upsertWatch(watch:Watch) {
        for (var i = 0; i < this.watches.length; i++) {

            if(this.watches[i].id === watch.id) {
                this.watches[i] = watch;
                return;
            }
        }

        this.watches.push(watch);
    }

    public toString = () : string => {

        return `User (
            id: ${this.id}, 
            email: ${this.email}, 
            name: ${this.name}, 
            lastname: ${this.lastname}, 
            country: ${this.country}, 
            registerDate: ${this.registerDate}, 
            key: ${this.key}, 
            watches: ${this.watches})`;
    }

}
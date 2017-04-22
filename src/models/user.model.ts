import { Watch } from './watch.model';

/**
 * Represents a Tw user
 */
export class User {
    id:number;
    email:string;
    name:string;
    lastname:string;
    country:string;
    registerDate:string; 
    key:string;
    watches:Watch[] = [];

    /**
     * 
     * @param id 
     * @param email 
     * @param name 
     * @param lastname 
     * @param country 
     * @param registerDate 
     * @param key 
     * @param watches 
     */
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

    /**
     * Add or update a watch depending on the presence of
     * a watch with the same ID.
     * IDs are uniq.
     * 
     * @param watch 
     */
    upsertWatch(watch:Watch) {
        for (var i = 0; i < this.watches.length; i++) {

            if(this.watches[i].id === watch.id) {
                this.watches[i] = watch;
                return;
            }
        }

        this.watches.push(watch);
    }

    /**
     * Returns a string representation of an user
     */
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
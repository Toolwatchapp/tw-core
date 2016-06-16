import { User } from './user.model';
import { Watch } from './watch.model';
export declare class ModelFactory {
    /**
     * Builds an User from json response
     * @param  {any}  jsonUser
     * @return {User}
     */
    static buildUser(jsonUser: any): User;
    /**
     * Builds a watch from json response
     * @param  {any}     jsonWatches
     * @return {Watch[]}
     */
    static buildWatches(jsonWatches: any): Watch[];
}

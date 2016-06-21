import { User } from './user.model';
import { Watch } from './watch.model';
import { BlogPost } from './blog-post.model';
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
    /**
     * Builds Json post from json response
     * @param  {any}        jsonPosts [description]
     * @return {BlogPost[]}           [description]
     */
    static buildPosts(jsonPosts: any): BlogPost[];
}

import { User, } from './user.model';
import { Watch } from './watch.model';
import { BlogPost } from './blog-post.model';
import { Measure } from './measure.model';

export class ModelFactory {


    /**
     * Builds an User from json response
     * @param  {any}  jsonUser
     * @return {User}         
     */
    static buildUser(jsonUser: any): User {

        return new User(
            jsonUser.userId,
            jsonUser.email,
            jsonUser.firstname,
            jsonUser.name,
            jsonUser.country,
            jsonUser.registerDate,
            jsonUser.key,
            ModelFactory.buildWatches(jsonUser.watches)
        );
    }

    /**
     * Build One Watch from JSON
     * @param jsonWatch 
     */
    static buildWatchFromJSON(jsonWatch: any): Watch {
        return new Watch(
            jsonWatch.watchId,
            jsonWatch.brand,
            jsonWatch.historySize,
            jsonWatch.measures.map(ModelFactory.buildMeasureFromJSON),
            jsonWatch.name,
            jsonWatch.yearOfBuy,
            jsonWatch.serial,
            jsonWatch.caliber
        );
    }

    /**
     * Build one measure from  JSON
     * @param jsonMeasure 
     */
    static buildMeasureFromJSON(jsonMeasure: any): Measure {
        return new Measure(
            jsonMeasure.id,
            jsonMeasure.measureUserTime,
            jsonMeasure.measureReferenceTime,
            jsonMeasure.statusId,
            jsonMeasure.accuracyUserTime,
            jsonMeasure.accuracyReferenceTime,
            jsonMeasure.accuracy,
            jsonMeasure.accuracyAge,
            jsonMeasure.percentile);
    }

    /**
     * Build a blog post from JSON
     * @param jsonPost 
     */
    static buildBlogPostFromJSON(jsonPost: any): BlogPost {
        return new BlogPost(
            jsonPost.id,
            jsonPost.title,
            new Date(jsonPost.date),
            jsonPost.excerpt,
            jsonPost.url
        );
    }

    /**
     * Builds a watch from json response
     * @param  {any}     jsonWatches
     * @return {Watch[]}            
     */
    static buildWatches(jsonWatches: any): Watch[] {
        return jsonWatches.map(ModelFactory.buildWatchFromJSON);
    }

    /**
     * Builds Json post from json response
     * @param  {any}        jsonPosts [description]
     * @return {BlogPost[]}           [description]
     */
    static buildPosts(jsonPosts: any): BlogPost[] {
        return jsonPosts.posts.map(ModelFactory.buildBlogPostFromJSON);
    }

}
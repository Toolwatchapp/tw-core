import { User, }  from './user.model';
import { Watch }  from './watch.model';
import { BlogPost }  from './blog-post.model';
import { Measure }  from './measure.model';

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
	 * Builds a watch from json response
	 * @param  {any}     jsonWatches
	 * @return {Watch[]}            
	 */
	static buildWatches(jsonWatches: any): Watch[] {
		return jsonWatches.map(function(jsonWatch:any) {
			return new Watch(
				jsonWatch.watchId,
				jsonWatch.brand,
				jsonWatch.historySize,
				jsonWatch.measures.map(function(jsonMeasure:any) {
					return new Measure(
						jsonMeasure.id,
						jsonMeasure.measureUserTime,
						jsonMeasure.measureReferenceTime,
						jsonMeasure.statusId,
						jsonMeasure.accuracyUserTime,
						jsonMeasure.accuracyReferenceTime,
						jsonMeasure.accuracy,
						jsonMeasure.accuracyAge,
						jsonMeasure.percentile)
				}),
				jsonWatch.name,
				jsonWatch.yearOfBuy,
				jsonWatch.serial,
				jsonWatch.caliber
			)
		});
	}

	/**
	 * Builds Json post from json response
	 * @param  {any}        jsonPosts [description]
	 * @return {BlogPost[]}           [description]
	 */
	static buildPosts(jsonPosts: any): BlogPost[]{
		return jsonPosts.posts.map(function(jsonPost:any) {

			return new BlogPost(
				jsonPost.id, 
				jsonPost.title, 
				new Date(jsonPost.date), 
				jsonPost.excerpt,
				jsonPost.url
			);
		});
	}

	static buildWatch(

		id: number,
		brand: string,
		name: string,
		yearOfBuy: number,
		serial: string,
		caliber: string

	): Watch{
		return new Watch(id, brand, 0, [], name, yearOfBuy, serial, caliber);
	}
}
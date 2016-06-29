"use strict";
var user_model_1 = require('./user.model');
var watch_model_1 = require('./watch.model');
var blog_post_model_1 = require('./blog-post.model');
var measure_model_1 = require('./measure.model');
var ModelFactory = (function () {
    function ModelFactory() {
    }
    /**
     * Builds an User from json response
     * @param  {any}  jsonUser
     * @return {User}
     */
    ModelFactory.buildUser = function (jsonUser) {
        return new user_model_1.User(jsonUser.userId, jsonUser.email, jsonUser.firstname, jsonUser.name, jsonUser.country, jsonUser.registerDate, jsonUser.key, ModelFactory.buildWatches(jsonUser.watches));
    };
    /**
     * Builds a watch from json response
     * @param  {any}     jsonWatches
     * @return {Watch[]}
     */
    ModelFactory.buildWatches = function (jsonWatches) {
        return jsonWatches.map(function (jsonWatch) {
            return new watch_model_1.Watch(jsonWatch.watchId, jsonWatch.brand, jsonWatch.historySize, jsonWatch.measures.map(function (jsonMeasure) {
                return new measure_model_1.Measure(jsonMeasure.id, jsonMeasure.measureUserTime, jsonMeasure.measureReferenceTime, jsonMeasure.statusId, jsonMeasure.accuracyUserTime, jsonMeasure.accuracyReferenceTime, jsonMeasure.accuracy, jsonMeasure.accuracyAge);
            }), jsonWatch.name, jsonWatch.yearOfBuy, jsonWatch.serial, jsonWatch.caliber);
        });
    };
    /**
     * Builds Json post from json response
     * @param  {any}        jsonPosts [description]
     * @return {BlogPost[]}           [description]
     */
    ModelFactory.buildPosts = function (jsonPosts) {
        return jsonPosts.posts.map(function (jsonPost) {
            return new blog_post_model_1.BlogPost(jsonPost.id, jsonPost.title, new Date(jsonPost.date), jsonPost.excerpt, jsonPost.url);
        });
    };
    return ModelFactory;
}());
exports.ModelFactory = ModelFactory;
//# sourceMappingURL=model.factory.js.map
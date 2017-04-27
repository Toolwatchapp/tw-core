import { ModelFactory } from './../../src/models/model.factory';

describe('ModelFactory', () => {

    it("should build an user", () => {

        let jsonUser = `{
            "userId": "1",
            "email": "m@m.com",
            "firstname": "M",
            "name": "N",
            "country": "C",
            "registerDate": "Monday 2 2016",
            "key": "qwerty",
            "watches": [{
                "watchId":"1",
                "brand":"a",
                "historySize":"1",
                "measures": [{
                    "id": "1",
                    "measureUserTime": "1",
                    "measureReferenceTime": "1",
                    "statusId": "2",
                    "accuracyUserTime": "1",
                    "accuracyReferenceTime": "1",
                    "accuracy": "1",
                    "accuracyAge": "1",
                    "percentile": "1"
                }],
                "name":"a",
                "yearOfBuy":"2016",
                "serial":"a",
                "caliber":"a"
            }]
        }`;

        let user = ModelFactory.buildUser(JSON.parse(jsonUser));

        expect(user.email).toEqual("m@m.com");

    });

     it("should build BlogPosts", () => {

        let jsonPosts = `
            {"status":"ok","count":10,"count_total":27,"pages":3,"posts":[
            {
                "id":681,
                "type":"post",
                "slug":"three-ways-to-demagnetize-a-watch",
                "url":"aaa",
                "status":"publish",
                "title":"aa",
                "title_plain":"aaa",
                "content":"aaaaa",
                "excerpt":"aaaaaa",
                "date":"2017-04-05 22:06:19",
                "modified":"2017-04-05 22:12:27",
                "categories":[],"tags":[],
                "author":{},
                "comments":[],
                "attachments":[],
                "comment_count":0,
                "comment_status":"open",
                "thumbnail":null,
                "thumbnail_size":"thumbnail",
                "thumbnail_images":[]
            }
        ]
    }`;

        let posts = ModelFactory.buildPosts(JSON.parse(jsonPosts));

        expect(posts.length).toEqual(1);
        expect(posts[0].id).toEqual(681);
     });

});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
System.register("models/measure.model", [], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Measure, MeasureStatus;
    return {
        setters:[],
        execute: function() {
            Measure = (function () {
                function Measure(id, measureUserTime, measureReferenceTime, status, accuracyUserTime, accuracyReferenceTime, accuracy, accuracyAge, percentile) {
                    var _this = this;
                    this.status = MeasureStatus.None;
                    this.serviced = false;
                    this.renewed = false;
                    this.toString = function () {
                        return "Measure (id: " + _this.id + ",\n\t\tmeasureUserTime: " + _this.measureUserTime + ",\n\t\tmeasureReferenceTime: " + _this.measureReferenceTime + ",\n\t\taccuracyUserTime: " + _this.accuracyUserTime + ",\n\t\taccuracyReferenceTime: " + _this.accuracyReferenceTime + ",\n\t\taccuracy: " + _this.accuracy + ",\n\t\taccuracyAge: " + _this.accuracyAge + ",\n\t\tpercentile: " + _this.percentile + ",\n\t\tstatus: " + _this.status + ")";
                    };
                    this.id = id;
                    this.measureUserTime = measureUserTime;
                    this.measureReferenceTime = measureReferenceTime;
                    this.accuracyUserTime = accuracyUserTime;
                    this.accuracyReferenceTime = accuracyReferenceTime;
                    this.accuracy = accuracy;
                    this.accuracyAge = accuracyAge;
                    this.percentile = Math.round(percentile * 10) / 10;
                    if (status >= 1) {
                        this.status |= MeasureStatus.BaseMeasure;
                    }
                    if (status >= 2) {
                        this.status |= MeasureStatus.AccuracyMeasure;
                    }
                    if (status >= 3) {
                        this.status |= MeasureStatus.ArchivedMeasure;
                    }
                    if (accuracyAge > 30) {
                        this.renewed = true;
                        this.status |= MeasureStatus.ShouldBeRenewed;
                    }
                    if (Math.abs(accuracy) > 20) {
                        this.serviced = true;
                        this.status |= MeasureStatus.ShouldBeServiced;
                    }
                    this.computePostAccuracyStatus(accuracy, accuracyAge);
                }
                Measure.prototype.addBaseMeasure = function (referenceTime, userTime) {
                    this.measureReferenceTime = referenceTime;
                    this.measureUserTime = userTime;
                    this.status |= MeasureStatus.BaseMeasure;
                };
                Measure.prototype.addAccuracyMeasure = function (referenceTime, userTime) {
                    this.accuracyReferenceTime = referenceTime;
                    this.accuracyUserTime = userTime;
                    this.status |= MeasureStatus.AccuracyMeasure;
                };
                Measure.prototype.addAccuracy = function (accuracy, accuracyAge, percentile) {
                    console.log("addAccuracy", accuracy, accuracyAge, percentile);
                    this.accuracy = accuracy;
                    this.accuracyAge = accuracyAge;
                    this.percentile = Math.round(percentile * 10) / 10;
                    this.computePostAccuracyStatus(accuracy, accuracyAge);
                };
                Measure.prototype.computePostAccuracyStatus = function (accuracy, accuracyAge) {
                    if (accuracy != null && accuracyAge != null) {
                        if (Math.abs(accuracy) > 20) {
                            this.status |= MeasureStatus.ShouldBeServiced;
                            this.serviced = true;
                        }
                        if (accuracyAge > 30) {
                            this.renewed = true;
                            this.status |= MeasureStatus.ShouldBeRenewed;
                        }
                    }
                };
                return Measure;
            }());
            exports_1("Measure", Measure);
            (function (MeasureStatus) {
                MeasureStatus[MeasureStatus["None"] = 0] = "None";
                MeasureStatus[MeasureStatus["BaseMeasure"] = 1] = "BaseMeasure";
                MeasureStatus[MeasureStatus["AccuracyMeasure"] = 2] = "AccuracyMeasure";
                MeasureStatus[MeasureStatus["ArchivedMeasure"] = 4] = "ArchivedMeasure";
                MeasureStatus[MeasureStatus["ShouldBeRenewed"] = 8] = "ShouldBeRenewed";
                MeasureStatus[MeasureStatus["ShouldBeServiced"] = 16] = "ShouldBeServiced";
            })(MeasureStatus || (MeasureStatus = {}));
            exports_1("MeasureStatus", MeasureStatus);
        }
    }
});
System.register("models/watch.model", ["models/measure.model"], function(exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
    var measure_model_1;
    var Watch, WatchAction, WatchStatus;
    return {
        setters:[
            function (measure_model_1_1) {
                measure_model_1 = measure_model_1_1;
            }],
        execute: function() {
            Watch = (function () {
                function Watch(id, brand, historySize, measures, name, yearOfBuy, serial, caliber) {
                    var _this = this;
                    if (historySize === void 0) { historySize = 0; }
                    if (measures === void 0) { measures = []; }
                    if (name === void 0) { name = ""; }
                    if (yearOfBuy === void 0) { yearOfBuy = null; }
                    if (serial === void 0) { serial = ""; }
                    if (caliber === void 0) { caliber = ""; }
                    this.toString = function () {
                        return "Watch (id: " + _this.id + ",\n\t\t\t\tbrand: " + _this.brand + ",\n\t\t\t\thistorySize: " + _this.historySize + ",\n\t\t\t\tmeasures: " + _this.measures + ",\n\t\t\t\tname: " + _this.name + ",\n\t\t\t\tyearOfBuy: " + _this.yearOfBuy + ",\n\t\t\t\tserial: " + _this.serial + ",\n\t\t\t\tcaliber: " + _this.caliber + ",\n\t\t\t\tstatus: " + _this.status + ",\n\t\t\t\tnext: " + _this.next + ",\n\t\t\t\twaiting: " + _this.waiting + ")";
                    };
                    this.id = id;
                    this.brand = brand;
                    this.historySize = historySize;
                    this.measures = measures.sort(function (a, b) {
                        return a.id - b.id;
                    });
                    this.name = name;
                    this.yearOfBuy = yearOfBuy;
                    this.serial = serial;
                    this.caliber = caliber;
                    this.initials = (this.brand != null && this.brand.length > 0) ? this.brand.charAt(0) : "";
                    this.initials += (this.name.length > 0) ? this.name.charAt(0) : "";
                    if (historySize == 0) {
                        this.status = WatchStatus.NeverMeasured;
                        this.next = WatchAction.Measure;
                    }
                    else if (historySize > this.measures.length) {
                        this.status = WatchStatus.HaveMoreMeasures;
                    }
                    this.computeNext();
                }
                Watch.prototype.computeNext = function () {
                    var lastMeasure = this.currentMeasure();
                    if (lastMeasure !== null
                        && lastMeasure.status & measure_model_1.MeasureStatus.BaseMeasure) {
                        if (Math.abs((lastMeasure.measureUserTime - Date.now() / 1000) / 3600) < 12) {
                            this.next = WatchAction.Waiting;
                            this.waiting = Math.round(12 - Math.abs((lastMeasure.measureUserTime - Date.now() / 1000) / 3600));
                        }
                        else if (!(lastMeasure.status & measure_model_1.MeasureStatus.AccuracyMeasure)) {
                            this.next = WatchAction.Accuracy;
                        }
                        else {
                            this.next = WatchAction.Measure;
                        }
                    }
                };
                Watch.prototype.average = function (amount) {
                    var actualAmount = 0;
                    var average = 0;
                    var i = this.measures.length - 1;
                    while (i >= 0 && actualAmount <= amount) {
                        if (this.measures[i].status & measure_model_1.MeasureStatus.AccuracyMeasure) {
                            average = average + Math.abs(this.measures[i].accuracy);
                            actualAmount++;
                        }
                        i--;
                    }
                    return (average / actualAmount).toFixed(1);
                };
                Watch.prototype.lastCompleteMeasure = function () {
                    var i = this.measures.length - 1;
                    while (i >= 0) {
                        if (this.measures[i].status & measure_model_1.MeasureStatus.AccuracyMeasure) {
                            return this.measures[i];
                        }
                        i--;
                    }
                    return null;
                };
                Watch.prototype.currentMeasure = function () {
                    if (this.measures.length !== 0) {
                        return this.measures[this.measures.length - 1];
                    }
                    else {
                        return null;
                    }
                };
                Watch.prototype.upsertMeasure = function (measure) {
                    for (var i = 0; i < this.measures.length; i++) {
                        console.log("i", i);
                        if (this.measures[i].id == measure.id) {
                            this.measures[i] = measure;
                            return;
                        }
                    }
                    this.historySize++;
                    this.measures.push(measure);
                };
                Watch.prototype.clone = function () {
                    return new Watch(this.id, this.brand, this.historySize, this.measures, this.name, this.yearOfBuy, this.serial, this.caliber);
                };
                return Watch;
            }());
            exports_2("Watch", Watch);
            (function (WatchAction) {
                WatchAction[WatchAction["Measure"] = 0] = "Measure";
                WatchAction[WatchAction["Waiting"] = 1] = "Waiting";
                WatchAction[WatchAction["Accuracy"] = 2] = "Accuracy";
            })(WatchAction || (WatchAction = {}));
            exports_2("WatchAction", WatchAction);
            (function (WatchStatus) {
                WatchStatus[WatchStatus["NeverMeasured"] = 0] = "NeverMeasured";
                WatchStatus[WatchStatus["HaveMoreMeasures"] = 1] = "HaveMoreMeasures";
            })(WatchStatus || (WatchStatus = {}));
            exports_2("WatchStatus", WatchStatus);
        }
    }
});
System.register("models/user.model", [], function(exports_3, context_3) {
    "use strict";
    var __moduleName = context_3 && context_3.id;
    var User, EmailPreferences;
    return {
        setters:[],
        execute: function() {
            User = (function () {
                function User(id, email, name, lastname, country, registerDate, key, watches) {
                    var _this = this;
                    this.watches = [];
                    this.emailPreferences = EmailPreferences.None;
                    this.toString = function () {
                        return "User (\n\t\t\tid: " + _this.id + ", \n\t\t\temail: " + _this.email + ", \n\t\t\tname: " + _this.name + ", \n\t\t\tlastname: " + _this.lastname + ", \n\t\t\tcountry: " + _this.country + ", \n\t\t\tregisterDate: " + _this.registerDate + ", \n\t\t\tkey: " + _this.key + ", \n\t\t\twatches: " + _this.watches + ")";
                    };
                    this.id = id;
                    this.email = email;
                    this.name = name;
                    this.lastname = lastname;
                    this.country = country;
                    this.registerDate = registerDate;
                    this.key = key;
                    this.watches = watches;
                }
                User.prototype.upsertWatch = function (watch) {
                    for (var i = 0; i < this.watches.length; i++) {
                        if (this.watches[i].id == watch.id) {
                            this.watches[i] = watch;
                            return;
                        }
                    }
                    this.watches.push(watch);
                };
                return User;
            }());
            exports_3("User", User);
            (function (EmailPreferences) {
                EmailPreferences[EmailPreferences["None"] = 0] = "None";
                EmailPreferences[EmailPreferences["FirstWatch"] = 2] = "FirstWatch";
                EmailPreferences[EmailPreferences["FirstMeasure"] = 4] = "FirstMeasure";
                EmailPreferences[EmailPreferences["DayAccuracy"] = 8] = "DayAccuracy";
                EmailPreferences[EmailPreferences["WeekAccuracy"] = 16] = "WeekAccuracy";
                EmailPreferences[EmailPreferences["Result"] = 32] = "Result";
                EmailPreferences[EmailPreferences["NewMeasure"] = 64] = "NewMeasure";
                EmailPreferences[EmailPreferences["SecondWatch"] = 128] = "SecondWatch";
                EmailPreferences[EmailPreferences["Comeback"] = 256] = "Comeback";
                EmailPreferences[EmailPreferences["WatchStories"] = 512] = "WatchStories";
            })(EmailPreferences || (EmailPreferences = {}));
            exports_3("EmailPreferences", EmailPreferences);
        }
    }
});
System.register("models/blog-post.model", [], function(exports_4, context_4) {
    "use strict";
    var __moduleName = context_4 && context_4.id;
    var BlogPost;
    return {
        setters:[],
        execute: function() {
            BlogPost = (function () {
                function BlogPost(id, title, date, excerpt, url) {
                    var _this = this;
                    this.toString = function () {
                        return "BlogPost (id: " + _this.id + ",\n\t\t\t\ttitle: " + _this.title + ",\n\t\t\t\tdate: " + _this.date + ",\n\t\t\t\texcerpt: " + _this.excerpt + ",\n\t\t\t\turl: " + _this.url + ")";
                    };
                    this.id = id;
                    this.title = this.decodeHTMLEntities(title);
                    this.date = date;
                    this.excerpt = this.decodeHTMLEntities(excerpt);
                    String.fromCharCode;
                    this.url = url;
                }
                BlogPost.prototype.decodeHTMLEntities = function (str) {
                    var txt = document.createElement("textarea");
                    str = str.replace(/<script[^>]*>([\S\s]*?)<\/script>/gmi, '');
                    str = str.replace(/<\/?\w(?:[^"'>]|"[^"]*"|'[^']*')*>/gmi, '');
                    str = str.replace('[Read more…]', '');
                    txt.innerHTML = str;
                    return txt.value;
                };
                return BlogPost;
            }());
            exports_4("BlogPost", BlogPost);
        }
    }
});
System.register("models/model.factory", ["models/user.model", "models/watch.model", "models/blog-post.model", "models/measure.model"], function(exports_5, context_5) {
    "use strict";
    var __moduleName = context_5 && context_5.id;
    var user_model_1, watch_model_1, blog_post_model_1, measure_model_2;
    var ModelFactory;
    return {
        setters:[
            function (user_model_1_1) {
                user_model_1 = user_model_1_1;
            },
            function (watch_model_1_1) {
                watch_model_1 = watch_model_1_1;
            },
            function (blog_post_model_1_1) {
                blog_post_model_1 = blog_post_model_1_1;
            },
            function (measure_model_2_1) {
                measure_model_2 = measure_model_2_1;
            }],
        execute: function() {
            ModelFactory = (function () {
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
                            return new measure_model_2.Measure(jsonMeasure.id, jsonMeasure.measureUserTime, jsonMeasure.measureReferenceTime, jsonMeasure.statusId, jsonMeasure.accuracyUserTime, jsonMeasure.accuracyReferenceTime, jsonMeasure.accuracy, jsonMeasure.accuracyAge, jsonMeasure.percentile);
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
            exports_5("ModelFactory", ModelFactory);
        }
    }
});
System.register("services/ga.service", ['@angular/core'], function(exports_6, context_6) {
    "use strict";
    var __moduleName = context_6 && context_6.id;
    var core_1;
    var GAService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            GAService = (function () {
                function GAService() {
                }
                GAService.spawn = function () {
                    // if(!GAService.gaCreated){
                    //   ga('create', 'UA-59148878-1', 'auto');
                    //   GAService.gaCreated = true;
                    // }
                };
                GAService.event = function (eventCategory, eventAction, eventLabel, eventValue) {
                    if (eventLabel === void 0) { eventLabel = ''; }
                    if (eventValue === void 0) { eventValue = 0; }
                    // GAService.spawn();
                    // ga('send', 'event', eventCategory, eventAction, eventLabel, eventValue);
                };
                GAService.screenview = function (screenName) {
                    // if(GAService.appName == undefined || GAService.appVersion == undefined){
                    //     throw "App not configured";
                    // }
                    // GAService.spawn();
                    // ga('send', 'screenview', {
                    //   'appName': GAService.appName,
                    //   'appVersion': GAService.appVersion,
                    //   'screenName': screenName
                    // });
                };
                GAService.pageview = function (page) {
                    // GAService.spawn();
                    // ga('set', 'page', page);
                    // ga('send', 'pageview')
                };
                GAService.gaCreated = false;
                GAService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], GAService);
                return GAService;
            }());
            exports_6("GAService", GAService);
        }
    }
});
System.register("helpers/string.helper", [], function(exports_7, context_7) {
    "use strict";
    var __moduleName = context_7 && context_7.id;
    var StringHelper;
    return {
        setters:[],
        execute: function() {
            StringHelper = (function () {
                function StringHelper() {
                }
                StringHelper.levenshtein = function (a, b) {
                    if (!a || !b)
                        return (a || b).length;
                    var m = [];
                    for (var i = 0; i <= b.length; i++) {
                        m[i] = [i];
                        if (i === 0)
                            continue;
                        for (var j = 0; j <= a.length; j++) {
                            m[0][j] = j;
                            if (j === 0)
                                continue;
                            m[i][j] = b.charAt(i - 1) == a.charAt(j - 1) ? m[i - 1][j - 1] : Math.min(m[i - 1][j - 1] + 1, m[i][j - 1] + 1, m[i - 1][j] + 1);
                        }
                    }
                    return m[b.length][a.length];
                };
                return StringHelper;
            }());
            exports_7("StringHelper", StringHelper);
        }
    }
});
System.register("services/twapi.service", ['@angular/core', '@angular/http', "models/watch.model", "models/model.factory", "services/ga.service", "helpers/string.helper", 'rxjs/Rx'], function(exports_8, context_8) {
    "use strict";
    var __moduleName = context_8 && context_8.id;
    var core_2, http_1, watch_model_2, model_factory_1, ga_service_1, string_helper_1;
    var TwAPIService;
    return {
        setters:[
            function (core_2_1) {
                core_2 = core_2_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (watch_model_2_1) {
                watch_model_2 = watch_model_2_1;
            },
            function (model_factory_1_1) {
                model_factory_1 = model_factory_1_1;
            },
            function (ga_service_1_1) {
                ga_service_1 = ga_service_1_1;
            },
            function (string_helper_1_1) {
                string_helper_1 = string_helper_1_1;
            },
            function (_1) {}],
        execute: function() {
            TwAPIService = (function () {
                /**
                 * Inject http service
                 * @param {Http} private http
                 */
                function TwAPIService(http) {
                    this.http = http;
                    this.baseUrl = "/api/";
                    this.accurateTime();
                }
                TwAPIService.resetTime = function () {
                    TwAPIService.time = undefined;
                };
                /**
                 * Log a user using email and password
                 * @param  {string}        email
                 * @param  {string}        password
                 * @return {Promise<User>}
                 */
                TwAPIService.prototype.login = function (email, password) {
                    var _this = this;
                    var creds = { email: email, password: password };
                    return this.http.put(this.baseUrl + "users", JSON.stringify(creds), TwAPIService.options)
                        .map(function (res) { return model_factory_1.ModelFactory.buildUser(res.json()); })
                        .toPromise().then(function (res) {
                        ga_service_1.GAService.event('API', 'LOGIN');
                        TwAPIService.apikey = res.key;
                        TwAPIService.headers.delete('X-API-KEY');
                        TwAPIService.headers.append('X-API-KEY', TwAPIService.apikey);
                        TwAPIService.user = res;
                        return res;
                    }, function (err) { return _this.handleError(err); });
                };
                /**
                 * Get an user using his API key
                 * @param  {string}        key [description]
                 * @return {Promise<User>}     [description]
                 */
                TwAPIService.prototype.getUser = function (key) {
                    var _this = this;
                    TwAPIService.apikey = key;
                    TwAPIService.headers.delete('X-API-KEY');
                    TwAPIService.headers.append('X-API-KEY', TwAPIService.apikey);
                    return this.http.get(this.baseUrl + "users", TwAPIService.options)
                        .map(function (res) { return model_factory_1.ModelFactory.buildUser(res.json()); })
                        .toPromise().then(function (res) {
                        ga_service_1.GAService.event('API', 'AUTOLOGIN');
                        TwAPIService.user = res;
                        res.key = key;
                        return res;
                    }, function (err) { return _this.handleError(err); });
                };
                /**
                 * Registers a new user
                 * @param  {string}        email
                 * @param  {string}        password
                 * @param  {string}        name
                 * @param  {string}        lastname
                 * @param  {string}        country
                 * @return {Promise<User>}
                 */
                TwAPIService.prototype.signup = function (email, password, name, lastname, country) {
                    return this.http.post(this.baseUrl + "users", JSON.stringify({
                        email: email,
                        password: password,
                        name: name,
                        lastname: lastname,
                        country: country
                    }), TwAPIService.options)
                        .map(function (res) { return model_factory_1.ModelFactory.buildUser(res.json()); })
                        .toPromise().then(function (res) {
                        ga_service_1.GAService.event('API', 'SIGNUP');
                        return res;
                    });
                };
                /**
                 * Deletes the account currently logged in.
                 * @return {Promise<boolean>}
                 */
                TwAPIService.prototype.deleteAccount = function () {
                    return this.http.delete(this.baseUrl + "users", TwAPIService.options).toPromise().then(function (response) {
                        ga_service_1.GAService.event('API', 'DELETE_ACCOUNT');
                        return true;
                    }).catch(this.handleError);
                };
                TwAPIService.prototype.getWatches = function () {
                    return this.http.get(this.baseUrl + "watches", TwAPIService.optionsGet)
                        .map(function (res) { return model_factory_1.ModelFactory.buildWatches(res.json()); })
                        .toPromise().then(function (res) {
                        ga_service_1.GAService.event('API', 'WATCHES', 'GET');
                        return res;
                    });
                };
                /**
                 * Update or insert a watch
                 * @param  {Watch}          watch
                 * @return {Promise<Watch>}
                 */
                TwAPIService.prototype.upsertWatch = function (watch) {
                    if (watch.id == null) {
                        return this.insertWatch(watch);
                    }
                    else {
                        return this.updateWatch(watch);
                    }
                };
                /**
                 * Deletes a watch and update the user accordingly
                 * @param  {User}          user
                 * @param  {Watch}         watch
                 * @return {Promise<User>}
                 */
                TwAPIService.prototype.deleteWatch = function (user, watch) {
                    var deleteOptions = new http_1.RequestOptions({ headers: TwAPIService.headers });
                    deleteOptions.body = JSON.stringify({ watchId: watch.id });
                    return this.http.delete(this.baseUrl + "watches", deleteOptions).toPromise().then(function (response) {
                        user.watches = user.watches.filter(function (filter) {
                            return filter.id != watch.id;
                        });
                        ga_service_1.GAService.event('API', 'WATCHES', 'DELETE');
                        return user;
                    });
                };
                /**
                 * Insert or update a measure and the related watch
                 * @param  {Watch}          watch
                 * @param  {Measure}        measure
                 * @return {Promise<Watch>}
                 */
                TwAPIService.prototype.upsertMeasure = function (watch, measure) {
                    if (measure.id == null) {
                        return this.insertMeasure(watch, measure);
                    }
                    else {
                        return this.updateMeasure(watch, measure);
                    }
                };
                /**
                 * Delete a measure and the update the related watch
                 * @param  {Watch}          watch
                 * @param  {Measure}        measure
                 * @return {Promise<Watch>}
                 */
                TwAPIService.prototype.deleteMeasure = function (watch, measure) {
                    var deleteOptions = new http_1.RequestOptions({ headers: TwAPIService.headers });
                    deleteOptions.body = JSON.stringify({ measureId: measure.id });
                    return this.http.delete(this.baseUrl + "measures", deleteOptions).toPromise().then(function (response) {
                        watch.measures = watch.measures.filter(function (filter) {
                            return filter.id != measure.id;
                        });
                        watch.computeNext();
                        watch.historySize--;
                        ga_service_1.GAService.event('API', 'MEASURE', 'DELETE');
                        return watch;
                    }).catch(this.handleError);
                };
                TwAPIService.prototype.getBlogPosts = function () {
                    return this.http.get("https://blog.toolwatch.io/?json=1")
                        .map(function (res) { return model_factory_1.ModelFactory.buildPosts(res.json()); })
                        .toPromise().then(function (res) {
                        ga_service_1.GAService.event('API', 'BLOG', 'GET');
                        return res;
                    });
                };
                /**
                 * Given a brand, returns likely brands ordered by confidence
                 * @param  {string}  brand [description]
                 * @return {Promise}       [{brand:string, confidence:number}]
                 */
                TwAPIService.prototype.getLikelyBrands = function (watch) {
                    return this.http.get(TwAPIService.assetsUrl + '/watch-brand.json')
                        .map(function (res) { return res.json(); })
                        .toPromise().then(function (brands) {
                        var likelyBrands = { watch: watch, proposals: [] };
                        for (var i = brands.length - 1; i >= 0; i--) {
                            var levenshteinDistance = string_helper_1.StringHelper.levenshtein(brands[i].name, watch.brand);
                            var confidence = levenshteinDistance / Math.max(watch.brand.length, brands[i].name.length) * 100;
                            likelyBrands.proposals.push({
                                brand: brands[i].name,
                                logo: brands[i].icon,
                                confidence: 100 - confidence
                            });
                        }
                        likelyBrands.proposals = likelyBrands.proposals.sort(function (a, b) {
                            return b.confidence - a.confidence;
                        });
                        return likelyBrands;
                    });
                };
                /**
                 * Return known brands
                 * @return {Promise}
                 */
                TwAPIService.prototype.getBrands = function () {
                    return this.http.get(TwAPIService.assetsUrl + '/watch-brand.json')
                        .map(function (res) { return res.json(); })
                        .toPromise().then(function (brands) {
                        ga_service_1.GAService.event('API', 'BRANDS', 'GET');
                        return brands;
                    });
                };
                /**
                 * Returns model of a given brand
                 * @param  {string}  brand
                 * @return {Promise}
                 */
                TwAPIService.prototype.getModels = function (brand) {
                    return this.http.get(TwAPIService.assetsUrl + '/watch-models/' + brand + ".json")
                        .map(function (res) { return res.json(); })
                        .toPromise().then(function (models) {
                        ga_service_1.GAService.event('API', 'MODELS', 'GET');
                        return models;
                    });
                };
                /**
                 * Gets the previously computed offset
                 * @return {number} [description]
                 */
                TwAPIService.prototype.getOffsetTime = function () {
                    return TwAPIService.time.offset;
                };
                /**
                 * Retrieve atomic clock time adjusted for network latency
                 * @param  {()=>void} statusCallback Called at each partial complete
                 * @param  {number = 0} precison How many calls we want to aveage
                 * @return {Promise<Date>}
                 */
                TwAPIService.prototype.accurateTime = function (statusCallback, precison) {
                    if (precison === void 0) { precison = 10; }
                    ga_service_1.GAService.event('API', 'TIME', 'GET');
                    //If we aren't already sync'ed
                    if (TwAPIService.time === undefined) {
                        //Stores each Promise in array
                        var promises = [];
                        for (var i = 0; i < precison; ++i) {
                            promises.push(this.fetchTime(statusCallback));
                        }
                        /**
                         * Promise.all() is the Promise equivalent of thread.join().
                         * It'll wait for all promises to be received.
                         *
                         * Returns a date adjusted w/ the median offset between
                         * atomic clock and js time.
                         * The offset received in each promise also accounts for
                         * the network roundtrip time.
                         */
                        return Promise.all(promises).then(function (results) {
                            results.sort(function (a, b) { return a - b; });
                            var half = Math.floor(results.length / 2);
                            var medianOffset;
                            if (results.length % 2) {
                                medianOffset = results[half];
                            }
                            else {
                                medianOffset = (results[half - 1] + results[half]) / 2.0;
                            }
                            TwAPIService.time = {
                                syncDate: new Date(Date.now() - medianOffset),
                                syncAnchor: window.performance.now(),
                                offset: medianOffset
                            };
                            return TwAPIService.time.syncDate;
                        });
                    }
                    else {
                        TwAPIService.time.syncDate = new Date(TwAPIService.time.syncDate.getTime() +
                            window.performance.now() - TwAPIService.time.syncAnchor);
                        TwAPIService.time.syncAnchor = window.performance.now();
                        return new Promise(function (resolve, reject) {
                            console.log(TwAPIService.time);
                            resolve(TwAPIService.time.syncDate);
                        });
                    }
                };
                /**
                 * Fetch offset between atomic clock and js time
                 * @param {() => void} statusCallback
                 */
                TwAPIService.prototype.fetchTime = function (statusCallback) {
                    var beforeTime = window.performance.now();
                    return this.http.get(this.baseUrl + "time", TwAPIService.optionsGet)
                        .toPromise()
                        .then(function (response) {
                        if (statusCallback !== undefined) {
                            statusCallback();
                        }
                        var now = window.performance.now();
                        var timeDiff = (now - beforeTime) / 2;
                        var serverTime = response.json().time - timeDiff;
                        return Date.now() - serverTime;
                    }, function (reject) { return console.error(reject); }).catch(this.handleError);
                };
                /**
                 * Update a measure and the watch it belongs to
                 * @param  {Watch}          watch
                 * @param  {Measure}        measure
                 * @return {Promise<Watch>}
                 */
                TwAPIService.prototype.updateMeasure = function (watch, measure) {
                    return this.http.put(this.baseUrl + "measures", JSON.stringify({
                        measureId: measure.id,
                        referenceTime: measure.accuracyReferenceTime,
                        userTime: measure.accuracyUserTime
                    }), TwAPIService.options).toPromise().then(function (response) {
                        ga_service_1.GAService.event('API', 'MEASURE', 'SECOND');
                        var json = response.json().result;
                        measure.addAccuracy(json.accuracy, json.accuracyAge, json.percentile);
                        watch.upsertMeasure(measure);
                        watch.next = watch_model_2.WatchAction.Measure;
                        return watch;
                    }).catch(this.handleError);
                };
                /**
                 * Insert a measure and the watch it belongs to
                 * @param  {Watch}          watch
                 * @param  {Measure}        measure
                 * @return {Promise<Watch>}
                 */
                TwAPIService.prototype.insertMeasure = function (watch, measure) {
                    return this.http.post(this.baseUrl + "measures", JSON.stringify({
                        watchId: watch.id,
                        referenceTime: measure.measureReferenceTime,
                        userTime: measure.measureUserTime
                    }), TwAPIService.options).toPromise().then(function (response) {
                        ga_service_1.GAService.event('API', 'MEASURE', 'FIRST');
                        measure.id = response.json().measureId;
                        watch.measures.push(measure);
                        watch.historySize++;
                        return watch;
                    }).catch(this.handleError);
                };
                /**
                 * Insert a watch
                 * @param  {Watch}          watch
                 * @return {Promise<Watch>}
                 */
                TwAPIService.prototype.insertWatch = function (watch) {
                    return this.http.post(this.baseUrl + "watches", JSON.stringify({
                        brand: watch.brand,
                        name: watch.name,
                        yearOfBuy: watch.yearOfBuy,
                        serial: watch.serial,
                        caliber: watch.caliber
                    }), TwAPIService.options).toPromise().then(function (response) {
                        watch.id = response.json().id;
                        ga_service_1.GAService.event('API', 'WATCH', 'PUT');
                        return watch;
                    });
                };
                /**
                 * Update a watch
                 * @param  {Watch}          watch
                 * @return {Promise<Watch>}
                 */
                TwAPIService.prototype.updateWatch = function (watch) {
                    return this.http.put(this.baseUrl + "watches", JSON.stringify({
                        id: watch.id,
                        brand: watch.brand,
                        name: watch.name,
                        yearOfBuy: watch.yearOfBuy,
                        serial: watch.serial,
                        caliber: watch.caliber
                    }), TwAPIService.options).toPromise().then(function (response) {
                        ga_service_1.GAService.event('API', 'WATCH', 'UPDATE');
                        return watch;
                    });
                };
                /**
                 * Log error to console
                 * @param {any} error [description]
                 */
                TwAPIService.prototype.handleError = function (error) {
                    console.error('An error occurred', error || "plop");
                    return Promise.reject(error.message || error);
                };
                /**
                 * All the HTTP code used by the toolwatch API are defined here.
                 * Http codes can be to refine the error types
                 */
                TwAPIService.HTTP_CONTINUE = 100;
                TwAPIService.HTTP_SWITCHING_PROTOCOLS = 101;
                TwAPIService.HTTP_PROCESSING = 102; // RFC2518
                // Success
                /**
                 * The request has succeeded
                 */
                TwAPIService.HTTP_OK = 200;
                /**
                 * The server successfully created a new resource
                 */
                TwAPIService.HTTP_CREATED = 201;
                TwAPIService.HTTP_ACCEPTED = 202;
                TwAPIService.HTTP_NON_AUTHORITATIVE_INFORMATION = 203;
                /**
                 * The server successfully processed the request, though no content is returned
                 */
                TwAPIService.HTTP_NO_CONTENT = 204;
                TwAPIService.HTTP_RESET_CONTENT = 205;
                TwAPIService.HTTP_PARTIAL_CONTENT = 206;
                TwAPIService.HTTP_MULTI_STATUS = 207; // RFC4918
                TwAPIService.HTTP_ALREADY_REPORTED = 208; // RFC5842
                TwAPIService.HTTP_IM_USED = 226; // RFC3229
                // Redirection
                TwAPIService.HTTP_MULTIPLE_CHOICES = 300;
                TwAPIService.HTTP_MOVED_PERMANENTLY = 301;
                TwAPIService.HTTP_FOUND = 302;
                TwAPIService.HTTP_SEE_OTHER = 303;
                /**
                 * The resource has not been modified since the last request
                 */
                TwAPIService.HTTP_NOT_MODIFIED = 304;
                TwAPIService.HTTP_USE_PROXY = 305;
                TwAPIService.HTTP_RESERVED = 306;
                TwAPIService.HTTP_TEMPORARY_REDIRECT = 307;
                TwAPIService.HTTP_PERMANENTLY_REDIRECT = 308; // RFC7238
                // Client Error
                /**
                 * The request cannot be fulfilled due to multiple errors
                 */
                TwAPIService.HTTP_BAD_REQUEST = 400;
                /**
                 * The user is unauthorized to access the requested resource
                 */
                TwAPIService.HTTP_UNAUTHORIZED = 401;
                TwAPIService.HTTP_PAYMENT_REQUIRED = 402;
                /**
                 * The requested resource is unavailable at this present time
                 */
                TwAPIService.HTTP_FORBIDDEN = 403;
                /**
                 * The requested resource could not be found
                 *
                 * Note: This is sometimes used to mask if there was an UNAUTHORIZED (401) or
                 * FORBIDDEN (403) error, for security reasons
                 */
                TwAPIService.HTTP_NOT_FOUND = 404;
                /**
                 * The request method is not supported by the following resource
                 */
                TwAPIService.HTTP_METHOD_NOT_ALLOWED = 405;
                /**
                 * The request was not acceptable
                 */
                TwAPIService.HTTP_NOT_ACCEPTABLE = 406;
                TwAPIService.HTTP_PROXY_AUTHENTICATION_REQUIRED = 407;
                TwAPIService.HTTP_REQUEST_TIMEOUT = 408;
                /**
                 * The request could not be completed due to a conflict with the current state
                 * of the resource
                 */
                TwAPIService.HTTP_CONFLICT = 409;
                TwAPIService.HTTP_GONE = 410;
                TwAPIService.HTTP_LENGTH_REQUIRED = 411;
                TwAPIService.HTTP_PRECONDITION_FAILED = 412;
                TwAPIService.HTTP_REQUEST_ENTITY_TOO_LARGE = 413;
                TwAPIService.HTTP_REQUEST_URI_TOO_LONG = 414;
                TwAPIService.HTTP_UNSUPPORTED_MEDIA_TYPE = 415;
                TwAPIService.HTTP_REQUESTED_RANGE_NOT_SATISFIABLE = 416;
                TwAPIService.HTTP_EXPECTATION_FAILED = 417;
                TwAPIService.HTTP_I_AM_A_TEAPOT = 418; // RFC2324
                TwAPIService.HTTP_UNPROCESSABLE_ENTITY = 422; // RFC4918
                TwAPIService.HTTP_LOCKED = 423; // RFC4918
                TwAPIService.HTTP_FAILED_DEPENDENCY = 424; // RFC4918
                TwAPIService.HTTP_RESERVED_FOR_WEBDAV_ADVANCED_COLLECTIONS_EXPIRED_PROPOSAL = 425; // RFC2817
                TwAPIService.HTTP_UPGRADE_REQUIRED = 426; // RFC2817
                TwAPIService.HTTP_PRECONDITION_REQUIRED = 428; // RFC6585
                TwAPIService.HTTP_TOO_MANY_REQUESTS = 429; // RFC6585
                TwAPIService.HTTP_REQUEST_HEADER_FIELDS_TOO_LARGE = 431; // RFC6585
                // Server Error
                /**
                 * The server encountered an unexpected error
                 *
                 * Note: This is a generic error message when no specific message
                 * is suitable
                 */
                TwAPIService.HTTP_INTERNAL_SERVER_ERROR = 500;
                /**
                 * The server does not recognise the request method
                 */
                TwAPIService.HTTP_NOT_IMPLEMENTED = 501;
                TwAPIService.HTTP_BAD_GATEWAY = 502;
                TwAPIService.HTTP_SERVICE_UNAVAILABLE = 503;
                TwAPIService.HTTP_GATEWAY_TIMEOUT = 504;
                TwAPIService.HTTP_VERSION_NOT_SUPPORTED = 505;
                TwAPIService.HTTP_VARIANT_ALSO_NEGOTIATES_EXPERIMENTAL = 506; // RFC2295
                TwAPIService.HTTP_INSUFFICIENT_STORAGE = 507; // RFC4918
                TwAPIService.HTTP_LOOP_DETECTED = 508; // RFC5842
                TwAPIService.HTTP_NOT_EXTENDED = 510; // RFC2774
                TwAPIService.HTTP_NETWORK_AUTHENTICATION_REQUIRED = 511;
                //Defines headers and request options
                TwAPIService.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
                TwAPIService.options = new http_1.RequestOptions({ headers: TwAPIService.headers });
                // Regression RC5. Doesn't accept get without body
                TwAPIService.optionsGet = new http_1.RequestOptions({ headers: TwAPIService.headers, body: "" });
                TwAPIService.assetsUrl = "app/assets";
                TwAPIService = __decorate([
                    core_2.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], TwAPIService);
                return TwAPIService;
            }());
            exports_8("TwAPIService", TwAPIService);
        }
    }
});
System.register("pipes/arethmetic-sign.pipe", ['@angular/core'], function(exports_9, context_9) {
    "use strict";
    var __moduleName = context_9 && context_9.id;
    var core_3;
    var ArethmeticSign;
    return {
        setters:[
            function (core_3_1) {
                core_3 = core_3_1;
            }],
        execute: function() {
            ArethmeticSign = (function () {
                function ArethmeticSign() {
                }
                ArethmeticSign.prototype.transform = function (value) {
                    if (value >= 0) {
                        return "+" + value;
                    }
                    else {
                        return value.toString();
                    }
                };
                ArethmeticSign = __decorate([
                    core_3.Pipe({
                        name: 'arethmeticSign'
                    }), 
                    __metadata('design:paramtypes', [])
                ], ArethmeticSign);
                return ArethmeticSign;
            }());
            exports_9("ArethmeticSign", ArethmeticSign);
        }
    }
});
System.register("pipes/leading-zero.pipe", ['@angular/core'], function(exports_10, context_10) {
    "use strict";
    var __moduleName = context_10 && context_10.id;
    var core_4;
    var LeadingZero;
    return {
        setters:[
            function (core_4_1) {
                core_4 = core_4_1;
            }],
        execute: function() {
            LeadingZero = (function () {
                function LeadingZero() {
                }
                LeadingZero.prototype.transform = function (value) {
                    if (value < 10) {
                        return "0" + value;
                    }
                    else {
                        return value.toString();
                    }
                };
                LeadingZero = __decorate([
                    core_4.Pipe({
                        name: 'leadingZero'
                    }), 
                    __metadata('design:paramtypes', [])
                ], LeadingZero);
                return LeadingZero;
            }());
            exports_10("LeadingZero", LeadingZero);
        }
    }
});
System.register("pipes/k-formatter.pipe", ['@angular/core'], function(exports_11, context_11) {
    "use strict";
    var __moduleName = context_11 && context_11.id;
    var core_5;
    var KFormatter;
    return {
        setters:[
            function (core_5_1) {
                core_5 = core_5_1;
            }],
        execute: function() {
            KFormatter = (function () {
                function KFormatter() {
                }
                //we expect a signed number (i.e +2.7)
                KFormatter.prototype.transform = function (value) {
                    var sign = value.charAt(0);
                    value = value.substr(1);
                    var number = Number(value);
                    if (Math.abs(number) > 999) {
                        return sign + (number / 1000).toFixed(0) + 'k';
                    }
                    else if (Math.abs(number) > 100) {
                        return sign + number.toFixed(0);
                    }
                    else {
                        return sign + number.toFixed(1);
                    }
                };
                KFormatter = __decorate([
                    core_5.Pipe({
                        name: 'kFormatter'
                    }), 
                    __metadata('design:paramtypes', [])
                ], KFormatter);
                return KFormatter;
            }());
            exports_11("KFormatter", KFormatter);
        }
    }
});
System.register("directives/clock/clock.component", ['@angular/core'], function(exports_12, context_12) {
    "use strict";
    var __moduleName = context_12 && context_12.id;
    var core_6;
    var ClockComponent;
    return {
        setters:[
            function (core_6_1) {
                core_6 = core_6_1;
            }],
        execute: function() {
            ClockComponent = (function () {
                function ClockComponent(elementRef) {
                    this.elementRef = elementRef;
                    this.monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
                    this.dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
                    this.date = new Date();
                    this.month = this.monthNames[this.date.getMonth()];
                    this.day = this.dayNames[this.date.getDay()] + " " + this.date.getDate();
                    this.nextLeap = this.date.getFullYear();
                    while (!this.isLeapYear(this.nextLeap)) {
                        this.nextLeap++;
                    }
                }
                ClockComponent.prototype.isLeapYear = function (year) {
                    return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
                };
                ClockComponent.prototype.initLocalClocks = function () {
                    var milliseconds = this.date.getMilliseconds();
                    var seconds = this.date.getSeconds();
                    var minutes = this.date.getMinutes();
                    var hours = this.date.getHours();
                    // Create an object with each hand and it's angle in degrees
                    var hands = [
                        {
                            hand: 'hours',
                            angle: (hours * 30) + (minutes / 2)
                        },
                        {
                            hand: 'minutes',
                            angle: (minutes * 6) + (seconds / 60) * 6
                        },
                        {
                            hand: 'seconds',
                            angle: (seconds * 6) + (milliseconds / 1000) * 6
                        }
                    ];
                    //Loop through each of these hands to set their angle
                    for (var j = 0; j < hands.length; j++) {
                        var element = this.elementRef.nativeElement.querySelector('.' + hands[j].hand);
                        element.style.webkitTransform = 'rotateZ(' + hands[j].angle + 'deg)';
                        element.style.transform = 'rotateZ(' + hands[j].angle + 'deg)';
                    }
                };
                ClockComponent.prototype.ngOnInit = function () {
                };
                ClockComponent = __decorate([
                    core_6.Component({
                        selector: 'clock',
                        template: ''
                    }), 
                    __metadata('design:paramtypes', [core_6.ElementRef])
                ], ClockComponent);
                return ClockComponent;
            }());
            exports_12("ClockComponent", ClockComponent);
        }
    }
});
System.register("directives/clock/moon-phases/moon-phases.component", ['@angular/core'], function(exports_13, context_13) {
    "use strict";
    var __moduleName = context_13 && context_13.id;
    var core_7;
    var MoonPhasesComponent;
    return {
        setters:[
            function (core_7_1) {
                core_7 = core_7_1;
            }],
        execute: function() {
            MoonPhasesComponent = (function () {
                function MoonPhasesComponent(elementRef) {
                    this.elementRef = elementRef;
                    var today = new Date();
                    var lastFullMoon = new Date(2016, 10, 14, 12, 0, 0, 0);
                    var diffDays = Math.round(Math.abs((today.getTime() - lastFullMoon.getTime()) / (24 * 60 * 60 * 1000)));
                    this.angleMoon = diffDays * 12.41;
                }
                MoonPhasesComponent.prototype.ngAfterViewInit = function () {
                    var elem = this.elementRef.nativeElement.querySelector('.moon-disque');
                    elem.style.webkitTransform = 'rotateZ(' + this.angleMoon + 'deg)';
                    elem.style.transform = 'rotateZ(' + this.angleMoon + 'deg)';
                };
                MoonPhasesComponent.prototype.ngOnInit = function () {
                };
                MoonPhasesComponent = __decorate([
                    core_7.Component({
                        selector: 'moon-phases',
                        template: "<div class=\"moon-phase-container\">\n               <div class=\"moon-mask\"></div>\n               <div class=\"moon-disque\"></div>\n             </div>\n             "
                    }), 
                    __metadata('design:paramtypes', [core_7.ElementRef])
                ], MoonPhasesComponent);
                return MoonPhasesComponent;
            }());
            exports_13("MoonPhasesComponent", MoonPhasesComponent);
        }
    }
});
System.register("directives/global-validator", [], function(exports_14, context_14) {
    "use strict";
    var __moduleName = context_14 && context_14.id;
    var GlobalValidator;
    return {
        setters:[],
        execute: function() {
            GlobalValidator = (function () {
                function GlobalValidator() {
                }
                GlobalValidator.mailFormat = function (control) {
                    var EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
                    if (control.value != "" && (control.value.length <= 5 || !EMAIL_REGEXP.test(control.value))) {
                        return { "incorrectMailFormat": true };
                    }
                    return null;
                };
                GlobalValidator.match = function (group, from, distant) {
                    console.log(group);
                    if (group && group.controls[from].value != group.controls[from].value) {
                        return { "noMatch": true };
                    }
                    return null;
                };
                return GlobalValidator;
            }());
            exports_14("GlobalValidator", GlobalValidator);
        }
    }
});
System.register("directives/login/login.component", ['@angular/core', 'ng2-translate/ng2-translate', "services/twapi.service", "directives/global-validator", "services/ga.service", '@angular/forms'], function(exports_15, context_15) {
    "use strict";
    var __moduleName = context_15 && context_15.id;
    var core_8, ng2_translate_1, twapi_service_1, global_validator_1, ga_service_2, forms_1;
    var LoginComponent;
    return {
        setters:[
            function (core_8_1) {
                core_8 = core_8_1;
            },
            function (ng2_translate_1_1) {
                ng2_translate_1 = ng2_translate_1_1;
            },
            function (twapi_service_1_1) {
                twapi_service_1 = twapi_service_1_1;
            },
            function (global_validator_1_1) {
                global_validator_1 = global_validator_1_1;
            },
            function (ga_service_2_1) {
                ga_service_2 = ga_service_2_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            }],
        execute: function() {
            LoginComponent = (function () {
                /**
                 * Constructor w/ service injection
                 * @param {TranslateService} private translate [description]
                 * @param {TwAPIService}     private twapi     [description]
                 * @param {FormBuilder}      private builder   [description]
                 */
                function LoginComponent(translate, twapi, formBuilder) {
                    this.translate = translate;
                    this.twapi = twapi;
                    this.formBuilder = formBuilder;
                    this.errors = [];
                    this.userLogged = new core_8.EventEmitter();
                    this.loginAttempt = new core_8.EventEmitter();
                    //Lang definition
                    translate.setDefaultLang('en');
                    translate.use('en');
                    this.loginForm = this.formBuilder.group({
                        email: ["", forms_1.Validators.compose([forms_1.Validators.required, global_validator_1.GlobalValidator.mailFormat])],
                        password: ["", forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(5)])]
                    });
                }
                /**
                 * Login an FB user
                 * @param {string} fbUser [description]
                 */
                LoginComponent.prototype.onFbSubmit = function (fbUser) {
                    var _this = this;
                    this.errors = [];
                    this.loginAttempt.emit(true);
                    //Tries to login an user using his fb email
                    this.twapi.login(fbUser.email, fbUser.id).then(
                    //success, away we go
                    function (res) {
                        _this.userLogged.emit(res);
                        ga_service_2.GAService.event('CTA', 'FB_LOGIN', 'SUCCESS');
                    }, 
                    //error, maybe it's the first time the user
                    //connects with fb. Tries to signup
                    function (err) {
                        _this.twapi.signup(fbUser.email, fbUser.id, fbUser.firstname, fbUser.lastname, fbUser.country).then(
                        //Success signup, away we go
                        function (res) {
                            ga_service_2.GAService.event('CTA', 'FB_SIGNUP', 'SUCCESS');
                            _this.userLogged.emit(res);
                        }, 
                        //Error, most likely the user tries to signin
                        //using facebook while he has a regular 
                        //account with the same email.
                        function (error) {
                            _this.loginAttempt.emit(false);
                            ga_service_2.GAService.event('CTA', 'FB_SIGNUP', 'FAIL');
                            switch (err.status) {
                                case 401:
                                    _this.errors.push('credentials');
                                    break;
                                default:
                                    _this.errors.push('error');
                                    break;
                            }
                        });
                    });
                    this.loginAttempt.emit(false);
                };
                /**
                 * Form submit
                 * @param {string}} user [description]
                 */
                LoginComponent.prototype.onSubmit = function (user) {
                    var _this = this;
                    this.errors = [];
                    //Form constraints are ok
                    if (this.loginForm.valid) {
                        this.loginAttempt.emit(true);
                        this.twapi.login(user.email, user.password).then(function (res) {
                            _this.userLogged.emit(res);
                            ga_service_2.GAService.event('CTA', 'LOGIN', 'SUCCESS');
                        }, function (err) {
                            ga_service_2.GAService.event('CTA', 'LOGIN', 'FAIL');
                            switch (err.status) {
                                case 401:
                                    _this.errors.push('credentials');
                                    break;
                                default:
                                    _this.errors.push('error');
                                    break;
                            }
                        });
                        this.loginAttempt.emit(false);
                    }
                };
                LoginComponent.prototype.ngOnInit = function () {
                };
                __decorate([
                    core_8.Output(), 
                    __metadata('design:type', Object)
                ], LoginComponent.prototype, "userLogged", void 0);
                __decorate([
                    core_8.Output(), 
                    __metadata('design:type', Object)
                ], LoginComponent.prototype, "loginAttempt", void 0);
                LoginComponent = __decorate([
                    core_8.Component({
                        selector: 'app-login',
                        template: ''
                    }), 
                    __metadata('design:paramtypes', [ng2_translate_1.TranslateService, twapi_service_1.TwAPIService, forms_1.FormBuilder])
                ], LoginComponent);
                return LoginComponent;
            }());
            exports_15("LoginComponent", LoginComponent);
        }
    }
});
System.register("directives/signup/signup.component", ['@angular/core', 'ng2-translate/ng2-translate', "services/twapi.service", "directives/global-validator", "services/ga.service", '@angular/forms'], function(exports_16, context_16) {
    "use strict";
    var __moduleName = context_16 && context_16.id;
    var core_9, ng2_translate_2, twapi_service_2, global_validator_2, ga_service_3, forms_2;
    var SignupComponent;
    return {
        setters:[
            function (core_9_1) {
                core_9 = core_9_1;
            },
            function (ng2_translate_2_1) {
                ng2_translate_2 = ng2_translate_2_1;
            },
            function (twapi_service_2_1) {
                twapi_service_2 = twapi_service_2_1;
            },
            function (global_validator_2_1) {
                global_validator_2 = global_validator_2_1;
            },
            function (ga_service_3_1) {
                ga_service_3 = ga_service_3_1;
            },
            function (forms_2_1) {
                forms_2 = forms_2_1;
            }],
        execute: function() {
            SignupComponent = (function () {
                /**
                * Constructor w/ service injection
                * @param {TranslateService} private translate [description]
                * @param {TwAPIService}     private twapi     [description]
                * @param {FormBuilder}      private builder   [description]
                */
                function SignupComponent(translate, twapi, formBuilder) {
                    var _this = this;
                    this.translate = translate;
                    this.twapi = twapi;
                    this.formBuilder = formBuilder;
                    this.submitAttempt = false;
                    this.errors = [];
                    this.filteredList = [];
                    this.query = "";
                    this.userLogged = new core_9.EventEmitter();
                    this.signupAttempt = new core_9.EventEmitter();
                    translate.setDefaultLang('en');
                    translate.use('en');
                    translate.get("countries").subscribe(function (result) {
                        _this.countries = result;
                    });
                    this.signupForm = this.formBuilder.group({
                        email: ["", forms_2.Validators.compose([forms_2.Validators.required, global_validator_2.GlobalValidator.mailFormat])],
                        emailRepeat: ["", forms_2.Validators.compose([forms_2.Validators.required, global_validator_2.GlobalValidator.mailFormat])],
                        password: ["", forms_2.Validators.compose([forms_2.Validators.required, forms_2.Validators.minLength(8)])],
                        passwordRepeat: ["",
                            forms_2.Validators.compose([
                                forms_2.Validators.required,
                                forms_2.Validators.minLength(8)
                            ])
                        ],
                        lastName: "",
                        firstName: "",
                        country: ""
                    });
                }
                /**
                 * Trims the filteredList accoring to the
                 * country field
                 * @param {string} query [description]
                 */
                SignupComponent.prototype.filter = function (query) {
                    this.filteredList = this.countries.filter(function (element) {
                        return element.toLowerCase().indexOf(query.toLowerCase()) > -1;
                    });
                };
                /**
                 * Assign the country label when selected
                 * from the list
                 * @param {string} item [description]
                 */
                SignupComponent.prototype.select = function (item) {
                    this.query = item;
                    this.filteredList = [];
                };
                /**
                 * submit the form
                 * @param {string    }} user [description]
                 */
                SignupComponent.prototype.onSubmit = function (user) {
                    var _this = this;
                    this.submitAttempt = true;
                    this.errors = [];
                    if (this.signupForm.valid &&
                        user.password == user.passwordRepeat &&
                        user.email == user.emailRepeat) {
                        this.signupAttempt.emit(true);
                        this.twapi.signup(user.email, user.password, user.firstName, user.lastName, this.query).then(function (res) {
                            ga_service_3.GAService.event('CTA', 'SIGNUP', 'SUCCESS');
                            _this.userLogged.emit(res);
                        }, function (error) {
                            ga_service_3.GAService.event('CTA', 'SIGNUP', 'FAIL');
                            switch (error.status) {
                                case twapi_service_2.TwAPIService.HTTP_UNAUTHORIZED:
                                    _this.errors.push('email-taken');
                                    break;
                                default:
                                    _this.errors.push('error');
                                    break;
                            }
                        });
                        this.signupAttempt.emit(false);
                    }
                    else {
                        if (user.password != user.passwordRepeat) {
                            this.errors.push('password-match');
                        }
                        if (user.email != user.emailRepeat) {
                            this.errors.push('email-match');
                        }
                    }
                };
                SignupComponent.prototype.ngOnInit = function () {
                };
                __decorate([
                    core_9.Output(), 
                    __metadata('design:type', Object)
                ], SignupComponent.prototype, "userLogged", void 0);
                __decorate([
                    core_9.Output(), 
                    __metadata('design:type', Object)
                ], SignupComponent.prototype, "signupAttempt", void 0);
                SignupComponent = __decorate([
                    core_9.Component({
                        selector: 'app-signup',
                        template: ''
                    }), 
                    __metadata('design:paramtypes', [ng2_translate_2.TranslateService, twapi_service_2.TwAPIService, forms_2.FormBuilder])
                ], SignupComponent);
                return SignupComponent;
            }());
            exports_16("SignupComponent", SignupComponent);
        }
    }
});
System.register("directives/watch/watch.component", ['@angular/core', 'ng2-translate/ng2-translate', "models/watch.model", "services/twapi.service", "services/ga.service", '@angular/forms'], function(exports_17, context_17) {
    "use strict";
    var __moduleName = context_17 && context_17.id;
    var core_10, ng2_translate_3, watch_model_3, twapi_service_3, ga_service_4, forms_3;
    var WatchComponent;
    return {
        setters:[
            function (core_10_1) {
                core_10 = core_10_1;
            },
            function (ng2_translate_3_1) {
                ng2_translate_3 = ng2_translate_3_1;
            },
            function (watch_model_3_1) {
                watch_model_3 = watch_model_3_1;
            },
            function (twapi_service_3_1) {
                twapi_service_3 = twapi_service_3_1;
            },
            function (ga_service_4_1) {
                ga_service_4 = ga_service_4_1;
            },
            function (forms_3_1) {
                forms_3 = forms_3_1;
            }],
        execute: function() {
            WatchComponent = (function () {
                /**
                 * Constructor with DI
                 * @param {TranslateService} private translate [description]
                 * @param {TwAPIService}     private twapi     [description]
                 * @param {FormBuilder}      private builder   [description]
                 */
                function WatchComponent(translate, twapi, formBuilder) {
                    var _this = this;
                    this.translate = translate;
                    this.twapi = twapi;
                    this.formBuilder = formBuilder;
                    this.watchSaved = new core_10.EventEmitter();
                    this.watchModel = new watch_model_3.Watch(null, "");
                    this.brands = [];
                    this.models = [];
                    this.filteredBrandList = [];
                    this.filteredModelList = [];
                    this.error = false;
                    this.submitAttempt = false;
                    translate.setDefaultLang('en');
                    translate.use('en');
                    this.initForm();
                    this.twapi.getBrands().then(function (res) {
                        _this.brands = res;
                    });
                }
                /**
                 * [selectBrand description]
                 * @param {string} brand [description]
                 */
                WatchComponent.prototype.selectBrand = function (brand) {
                    var _this = this;
                    this.twapi.getModels(brand.toLowerCase()).then(function (res) { return _this.models = res; }, function (error) { return _this.models = []; });
                    this.filteredBrandList = [];
                    this.watchModel.brand = brand;
                };
                /**
                 * Select a model
                 * @param {string} model [description]
                 */
                WatchComponent.prototype.selectModel = function (model) {
                    this.filteredModelList = [];
                    this.watchModel.name = model;
                };
                /**
                 * Filter brands according the brand
                 * @param {string} brand [description]
                 */
                WatchComponent.prototype.filterBrand = function (brand) {
                    this.filteredBrandList = this.brands.filter(function (element) {
                        return element.name.toLowerCase().indexOf(brand.toLowerCase()) > -1;
                    });
                };
                /**
                 * Filters models according to model
                 * @param {string} model [description]
                 */
                WatchComponent.prototype.filterModel = function (model) {
                    this.filteredModelList = this.models.filter(function (element) {
                        return element.toLowerCase().indexOf(model.toLowerCase()) > -1;
                    });
                };
                WatchComponent.prototype.ngOnInit = function () {
                };
                WatchComponent.prototype.initForm = function () {
                    this.watchForm = this.formBuilder.group({
                        id: this.watchModel.id,
                        brand: [this.watchModel.brand, forms_3.Validators.required],
                        name: [this.watchModel.name, forms_3.Validators.required],
                        caliber: this.watchModel.caliber,
                        year: [this.watchModel.yearOfBuy, forms_3.Validators.compose([forms_3.Validators.minLength(4), forms_3.Validators.maxLength(4)])],
                        serial: this.watchModel.serial
                    });
                };
                /**
                 * Submit a watch
                 */
                WatchComponent.prototype.onSubmit = function () {
                    var _this = this;
                    this.submitAttempt = true;
                    if (this.watchForm.valid) {
                        this.twapi.upsertWatch(this.watchModel).then(function (res) {
                            ga_service_4.GAService.event('CTA', 'WATCH_UPSERT', 'SUCCESS');
                            _this.user.upsertWatch(res);
                            _this.watchSaved.emit(_this.user);
                            _this.submitAttempt = false;
                        }, function (error) {
                            ga_service_4.GAService.event('CTA', 'WATCH_UPSERT', 'FAIL');
                            _this.error = true;
                            _this.submitAttempt = false;
                        });
                    }
                };
                WatchComponent.prototype.onDelete = function () {
                    var _this = this;
                    this.submitAttempt = true;
                    this.twapi.deleteWatch(this.user, this.watchModel).then(function (res) {
                        ga_service_4.GAService.event('CTA', 'WATCH_DELETE', 'SUCCESS');
                        _this.watchSaved.emit(res);
                        _this.submitAttempt = false;
                    }, function (error) {
                        ga_service_4.GAService.event('CTA', 'WATCH_DELETE', 'FAIL');
                        _this.error = true;
                        _this.submitAttempt = false;
                    });
                };
                __decorate([
                    core_10.Output(), 
                    __metadata('design:type', Object)
                ], WatchComponent.prototype, "watchSaved", void 0);
                WatchComponent = __decorate([
                    core_10.Component({
                        selector: 'watch-form',
                        template: ''
                    }), 
                    __metadata('design:paramtypes', [ng2_translate_3.TranslateService, twapi_service_3.TwAPIService, forms_3.FormBuilder])
                ], WatchComponent);
                return WatchComponent;
            }());
            exports_17("WatchComponent", WatchComponent);
        }
    }
});
System.register("toolwatch", ['@angular/platform-browser', '@angular/core', '@angular/forms', '@angular/http', 'ng2-translate/ng2-translate', "services/twapi.service", "services/ga.service", "pipes/arethmetic-sign.pipe", "pipes/leading-zero.pipe", "pipes/k-formatter.pipe", "directives/clock/clock.component", "directives/clock/moon-phases/moon-phases.component", "directives/login/login.component", "directives/signup/signup.component", "directives/watch/watch.component", "models/watch.model", "models/user.model", "models/measure.model", "models/blog-post.model"], function(exports_18, context_18) {
    "use strict";
    var __moduleName = context_18 && context_18.id;
    var platform_browser_1, core_11, forms_4, http_2, ng2_translate_4, twapi_service_4, ga_service_5, arethmetic_sign_pipe_1, leading_zero_pipe_1, k_formatter_pipe_1, clock_component_1, moon_phases_component_1, login_component_1, signup_component_1, watch_component_1;
    var ToolwatchModule;
    var exportedNames_1 = {
        'ToolwatchModule': true
    };
    function exportStar_1(m) {
        var exports = {};
        for(var n in m) {
            if (n !== "default"&& !exportedNames_1.hasOwnProperty(n)) exports[n] = m[n];
        }
        exports_18(exports);
    }
    return {
        setters:[
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (core_11_1) {
                core_11 = core_11_1;
            },
            function (forms_4_1) {
                forms_4 = forms_4_1;
            },
            function (http_2_1) {
                http_2 = http_2_1;
            },
            function (ng2_translate_4_1) {
                ng2_translate_4 = ng2_translate_4_1;
            },
            function (twapi_service_4_1) {
                twapi_service_4 = twapi_service_4_1;
                exportStar_1(twapi_service_4_1);
            },
            function (ga_service_5_1) {
                ga_service_5 = ga_service_5_1;
                exportStar_1(ga_service_5_1);
            },
            function (arethmetic_sign_pipe_1_1) {
                arethmetic_sign_pipe_1 = arethmetic_sign_pipe_1_1;
                exportStar_1(arethmetic_sign_pipe_1_1);
            },
            function (leading_zero_pipe_1_1) {
                leading_zero_pipe_1 = leading_zero_pipe_1_1;
                exportStar_1(leading_zero_pipe_1_1);
            },
            function (k_formatter_pipe_1_1) {
                k_formatter_pipe_1 = k_formatter_pipe_1_1;
                exportStar_1(k_formatter_pipe_1_1);
            },
            function (clock_component_1_1) {
                clock_component_1 = clock_component_1_1;
                exportStar_1(clock_component_1_1);
            },
            function (moon_phases_component_1_1) {
                moon_phases_component_1 = moon_phases_component_1_1;
                exportStar_1(moon_phases_component_1_1);
            },
            function (login_component_1_1) {
                login_component_1 = login_component_1_1;
                exportStar_1(login_component_1_1);
            },
            function (signup_component_1_1) {
                signup_component_1 = signup_component_1_1;
                exportStar_1(signup_component_1_1);
            },
            function (watch_component_1_1) {
                watch_component_1 = watch_component_1_1;
                exportStar_1(watch_component_1_1);
            },
            function (watch_model_4_1) {
                exportStar_1(watch_model_4_1);
            },
            function (user_model_2_1) {
                exportStar_1(user_model_2_1);
            },
            function (measure_model_3_1) {
                exportStar_1(measure_model_3_1);
            },
            function (blog_post_model_2_1) {
                exportStar_1(blog_post_model_2_1);
            }],
        execute: function() {
            ToolwatchModule = (function () {
                function ToolwatchModule() {
                }
                ToolwatchModule = __decorate([
                    core_11.NgModule({
                        declarations: [
                            arethmetic_sign_pipe_1.ArethmeticSign,
                            leading_zero_pipe_1.LeadingZero,
                            k_formatter_pipe_1.KFormatter,
                            clock_component_1.ClockComponent,
                            moon_phases_component_1.MoonPhasesComponent,
                            login_component_1.LoginComponent,
                            signup_component_1.SignupComponent,
                            watch_component_1.WatchComponent
                        ],
                        imports: [
                            platform_browser_1.BrowserModule,
                            forms_4.FormsModule,
                            http_2.HttpModule,
                            forms_4.ReactiveFormsModule,
                            ng2_translate_4.TranslateModule.forRoot()
                        ],
                        exports: [
                            arethmetic_sign_pipe_1.ArethmeticSign,
                            leading_zero_pipe_1.LeadingZero,
                            k_formatter_pipe_1.KFormatter,
                            clock_component_1.ClockComponent,
                            moon_phases_component_1.MoonPhasesComponent,
                            login_component_1.LoginComponent,
                            signup_component_1.SignupComponent,
                            watch_component_1.WatchComponent
                        ],
                        providers: [twapi_service_4.TwAPIService, ga_service_5.GAService]
                    }), 
                    __metadata('design:paramtypes', [])
                ], ToolwatchModule);
                return ToolwatchModule;
            }());
            exports_18("ToolwatchModule", ToolwatchModule);
        }
    }
});
//# sourceMappingURL=toolwatch-bundle.js.map
"use strict";
var BlogPost = (function () {
    function BlogPost(id, title, date, excerpt, url) {
        this.id = id;
        this.title = this.decodeHTMLEntities(title);
        this.date = date;
        this.excerpt = this.decodeHTMLEntities(excerpt);
        this.url = url;
    }
    BlogPost.prototype.decodeHTMLEntities = function (str) {
        if (str && typeof str === 'string') {
            str = str.replace(/<script[^>]*>([\S\s]*?)<\/script>/gmi, '');
            str = str.replace(/<\/?\w(?:[^"'>]|"[^"]*"|'[^']*')*>/gmi, '');
        }
        return str;
    };
    return BlogPost;
}());
exports.BlogPost = BlogPost;
//# sourceMappingURL=blog-post.model.js.map
"use strict";
var BlogPost = (function () {
    function BlogPost(id, title, date, excerpt, url) {
        this.id = id;
        this.title = title;
        this.date = date;
        this.excerpt = excerpt;
        this.url = url;
    }
    return BlogPost;
}());
exports.BlogPost = BlogPost;
//# sourceMappingURL=blog-post.model.js.map
"use strict";
var BlogPost = (function () {
    function BlogPost(id, title, date, excerpt, url) {
        this.id = id;
        this.title = title;
        this.date = date;
        this.excerpt = excerpt;
        this.url = url;
        this.excerpt = this.excerpt.replace('<p>', '')
            .replace('</p>', '')
            .replace(/<(?:.|\n)*?>/gm, '');
        this.title = this.title.replace('&#8211;', '')
            .replace('&#8220;', '')
            .replace(/<(?:.|\n)*?>/gm, '');
    }
    return BlogPost;
}());
exports.BlogPost = BlogPost;
//# sourceMappingURL=blog-post.model.js.map
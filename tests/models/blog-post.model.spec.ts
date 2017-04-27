import { BlogPost } from './../../src/models/blog-post.model';

describe('BlogPost model', () => {

    let model: BlogPost;

    beforeEach(() => {
        model = new BlogPost(
            681,
            "Three ways to demagnetize a watch (including one tip using an old TV!)",
            new Date("2017-04-05 22:06:19"),
            "<p>Any watch lover should know how to demagnetize a watch\u00a0like a boss! This would undoubtedly make Antoine Norbert de Patek or Abraham-Louis Breguet proud! In this article, you will learn three watch tips to quickly demagnetize your mechanical watch.<\/p>\n",
            "https:\/\/blog.toolwatch.io\/watch-tips\/three-ways-to-demagnetize-a-watch\/"
        );
    });

    it("should be properly constructed", () => {

        expect(model.id).toEqual(681);
        expect(model.excerpt.startsWith("Any watch lover")).toBeTruthy();
        expect(model.toString()).toContain("BlogPost (id: 681");
    });

});

/**
 * Represents a blog post from 
 * https://blog.toolwatch.io/
 */
export class BlogPost {
    id: number;
    title: string;
    date: Date;
    excerpt: string;
    url: string;

    /**
     * Constructor
     * @param id 
     * @param title 
     * @param date 
     * @param excerpt 
     * @param url 
     */
    constructor(id: number, title: string, date: Date, excerpt: string, url: string) {

        this.id = id;
        this.title = this.decodeHTMLEntities(title);
        this.date = date;
        this.excerpt = this.decodeHTMLEntities(excerpt);
        this.url = url;
    }

    /**
     * toString
     */
    public toString = (): string => {
        return `BlogPost (id: ${this.id},
                title: ${this.title},
                date: ${this.date},
                excerpt: ${this.excerpt},
                url: ${this.url})`;
    }

    /**
     * Transforms a string into a html cleaned string
     * @param str
     */
    private decodeHTMLEntities(str: string) {

        var txt = document.createElement("textarea");
        str = str.replace(/<script[^>]*>([\S\s]*?)<\/script>/gmi, '');
        str = str.replace(/<\/?\w(?:[^"'>]|"[^"]*"|'[^']*')*>/gmi, '');
        str = str.replace('[Read more…]', '');
        txt.innerHTML = str;

        return txt.value;
    }

}
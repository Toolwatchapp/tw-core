export declare class BlogPost {
    id: number;
    title: string;
    date: Date;
    excerpt: string;
    url: string;
    constructor(id: number, title: string, date: Date, excerpt: string, url: string);
    private decodeHTMLEntities(str);
}

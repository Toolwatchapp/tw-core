export class BlogPost{
	id:number;
	title:string;
	date:Date;
	excerpt:string;
	url:string;

	constructor(id: number, title: string, date: Date, excerpt: string, url: string){

		this.id = id;
		this.title = title;
		this.date = date;
		this.excerpt = excerpt;
		this.url = url;
	}
}
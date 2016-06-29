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

		this.excerpt = this.excerpt.replace('<p>', '')
			.replace('</p>', '')
			.replace(/<(?:.|\n)*?>/gm, '');

		this.title = this.title.replace('&#8211;', '')
			.replace('&#8220;', '')
			.replace(/<(?:.|\n)*?>/gm, '');


	}
}
export class BlogPost{
	id:number;
	title:string;
	date:Date;
	excerpt:string;
	url:string;

	constructor(id: number, title: string, date: Date, excerpt: string, url: string){

		this.id = id;
		this.title = this.decodeHTMLEntities(title);
		this.date = date;
		this.excerpt = this.decodeHTMLEntities(excerpt);
		this.url = url;
	}

	private decodeHTMLEntities(str:string) {

    if(str && typeof str === 'string') {
      str = str.replace(/<script[^>]*>([\S\s]*?)<\/script>/gmi, '');
      str = str.replace(/<\/?\w(?:[^"'>]|"[^"]*"|'[^']*')*>/gmi, '');
    }

    return str;
  }

}
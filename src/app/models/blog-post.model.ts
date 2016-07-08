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
		String.fromCharCode
		this.url = url;
	}

	private decodeHTMLEntities(str:string) {

		var txt = document.createElement("textarea");
		str = str.replace(/<script[^>]*>([\S\s]*?)<\/script>/gmi, '');
      	str = str.replace(/<\/?\w(?:[^"'>]|"[^"]*"|'[^']*')*>/gmi, '');
      	str = str.replace('[Read more…]', '');
	    txt.innerHTML = str;

	    return txt.value;
  	}

}
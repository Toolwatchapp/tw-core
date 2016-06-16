import { Watch } from './watch.model'

export class User{
	id:number;
	email:string;
	name:string;
	lastname:string;
	country:string;
	registerDate:string;
	key:string;
	watches:Watch[] = [];
	emailPreferences:EmailPreferences = EmailPreferences.None;

	constructor(id: number,email: string,name: string,
		lastname: string,country: string,registerDate: 
		string,key: string,watches: Watch[]){

		this.id = id;
		this.email = email;
		this.name = name;
		this.lastname = lastname;
		this.country = country;
		this.registerDate = registerDate;
		this.key = key;
		this.watches = watches;
	}

}

export enum EmailPreferences {

	None = 0,
	FirstWatch = 1 << 1,
	FirstMeasure = 1 << 2,
	DayAccuracy = 1 << 3,
	WeekAccuracy = 1 << 4,
	Result = 1 << 5,
	NewMeasure = 1 << 6,
	SecondWatch = 1 << 7,
	Comeback = 1 << 8,
	WatchStories = 1 << 9
}


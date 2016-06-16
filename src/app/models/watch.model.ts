import { Measure, MeasureStatus } from './measure.model'

export class Watch{
	id:number;
	brand:string;
	historySize:number;
	measures:Measure[];
	name:string;
	yearOfBuy:number;
	serial:string;
	caliber:string;
	status: WatchStatus = WatchStatus.None

	constructor(id: number, brand: string, historySize: number = 0,
		measures: Measure[] = [], name: string = "", yearOfBuy: number = 0,
		serial: string = "", caliber: string = "") {

		this.id = id;
		this.brand = brand;
		this.historySize = historySize;
		this.measures = measures;
		this.name = name;
		this.yearOfBuy = yearOfBuy;
		this.serial = serial;
		this.caliber = caliber;

		if (historySize == 0){
			this.status |= WatchStatus.NeverMeasured;
		}else if(historySize > this.measures.length){
			this.status |= WatchStatus.HaveMoreMeasures;
		}
	}

	currentMeasure():Measure{
		if(this.measures.length !== 0){
			return this.measures[this.measures.length - 1];
		}else{
			return null;
		}
	}
}

export enum WatchStatus{
	None = 0,
	NeverMeasured = 1 << 1,
	HaveMoreMeasures = 1 << 2
}
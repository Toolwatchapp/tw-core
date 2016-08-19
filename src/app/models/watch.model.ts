import { Measure, MeasureStatus } from './measure.model'
import {Wove} from 'aspect.js/dist/lib/aspect';
import { LoggerAspect } from './../aspects/logger.aspect'


@Wove(LoggerAspect)
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
	next: WatchAction;
	waiting:number;

	constructor(id: number, brand: string, historySize: number = 0,
		measures: Measure[] = [], name: string = "", yearOfBuy: number = null,
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
			this.next = WatchAction.Measure;
		}else if(historySize > this.measures.length){
			this.status |= WatchStatus.HaveMoreMeasures;
		}

		let lastMeasure = this.currentMeasure();
		if (lastMeasure !== null 
			&& lastMeasure.status & MeasureStatus.BaseMeasure){
			
			if (Math.abs((lastMeasure.measureUserTime - Date.now()/1000)/3600) < 12){
				this.next = WatchAction.Waiting;
				this.waiting = Math.round(12 - Math.abs((lastMeasure.measureUserTime - Date.now()/1000)/3600));
			}else if(!(lastMeasure.status & MeasureStatus.AccuracyMeasure)) {
				this.next = WatchAction.Accuracy;
			}else{
				this.next = WatchAction.Measure;
			}
		}
	}

	public toString = () : string => {
		return `Watch (id: ${this.id},
				brand: ${this.brand},
				historySize: ${this.historySize},
				measures: ${this.measures},
				name: ${this.name},
				yearOfBuy: ${this.yearOfBuy},
				serial: ${this.serial},
				caliber: ${this.caliber},
				status: ${this.status},
				next: ${this.next},
				waiting: ${this.waiting})`;
	}

	currentMeasure():Measure{
		if(this.measures.length !== 0){
			return this.measures[this.measures.length - 1];
		}else{
			return null;
		}
	}

	upsertMeasure(measure:Measure){

		console.log("this", this);
		console.log("measure", measure);
		for (var i = 0; i < this.measures.length; i++) {
			console.log("i", i);
			if(this.measures[i].id == measure.id){
				this.measures[i] = measure;
				console.log("return", this, this.measures[i], measure);
				return;
			}
		}

		this.measures.push(measure);
		console.log("this2", this);
	}
}

export enum WatchAction{
	Measure, Waiting, Accuracy
}

export enum WatchStatus{
	None = 0,
	NeverMeasured = 1 << 1,
	HaveMoreMeasures = 1 << 2
}
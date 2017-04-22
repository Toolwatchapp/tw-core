import { Measure, MeasureStatus } from './measure.model';

/**
 * Represents a Toolwatch watch
 */
export class Watch {
    id:number;
    brand:string;
    historySize:number;
    measures:Measure[];
    name:string;
    yearOfBuy:number;
    serial:string;
    caliber:string;
    status: WatchStatus;
    next: WatchAction;
    waiting:number;
    initials:string;

    /**
     * Classical constructor
     * @param id 
     * @param brand 
     * @param historySize 
     * @param measures 
     * @param name 
     * @param yearOfBuy 
     * @param serial 
     * @param caliber 
     */
    constructor(
        id: number, brand: string, 
        historySize: number = 0,
        measures: Measure[] = [], 
        name: string = "", 
        yearOfBuy: number = null,
        serial: string = "", 
        caliber: string = ""
    ) {

        this.id = id;
        this.brand = brand;
        this.historySize = historySize;

        //resort in case of server cached optimisation
        this.measures = measures.sort(function(a:Measure, b:Measure){
            return a.id - b.id;
        });
        this.name = name;

        //if yearOfBuy is filled
        if(yearOfBuy !== 0) {
            this.yearOfBuy = yearOfBuy;
        } else {
            this.yearOfBuy = null;
        }

        this.serial = serial;
        this.caliber = caliber;

        //build the initials for the watch 
        this.initials = (this.brand != null && this.brand.length > 0) ? this.brand.charAt(0) : "";
        this.initials += (this.name.length > 0) ? this.name.charAt(0) : "";

        //compute next action & status
        if (historySize === 0) {
            this.status = WatchStatus.NeverMeasured;
            this.next = WatchAction.Measure;
        }else if(historySize > this.measures.length) {
            this.status = WatchStatus.HaveMoreMeasures;
        }else {
            this.status = 0;
        }

        this.computeNext();
    }

    /**
     * Computes the next action given the measures status
     */
    computeNext() {
        let lastMeasure = this.currentMeasure();
        if (lastMeasure !== null 
            && lastMeasure.status & MeasureStatus.BaseMeasure) {
            
            if (Math.abs((lastMeasure.measureUserTime - Date.now()/1000)/3600) < 12) {
                this.next = WatchAction.Waiting;
                this.waiting = Math.round(12 - Math.abs((lastMeasure.measureUserTime - Date.now()/1000)/3600));
            }else if(!(lastMeasure.status & MeasureStatus.AccuracyMeasure)) {
                this.next = WatchAction.Accuracy;
            }else {
                this.next = WatchAction.Measure;
            }
        }
    }

    /**
     * Retunrs a string represrentation
     */
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

    /**
     * Get the average precision of the received measures
     * Number of measures received depends on plan.
     * @param amount 
     */
    average(amount:number) {

        let actualAmount:number = 0;
        let average:number = 0;
        let i:number = this.measures.length - 1;

        while(i>= 0 && actualAmount <= amount) {
            if(this.measures[i].status & MeasureStatus.AccuracyMeasure) {
                average = average + Math.abs(this.measures[i].accuracy);
                actualAmount++;
            }
            
            i--;
            
        }
        return (average/actualAmount).toFixed(1);
    }

    /**
     * Returns the last complete measure for watch (i.e. 2/2)
     */
    lastCompleteMeasure():Measure {
        let i:number = this.measures.length - 1;

        while(i >= 0) {
            if(this.measures[i].status & MeasureStatus.AccuracyMeasure) {
                return this.measures[i];
            }
            
            i--;
        }

        return null;
    }

    /**
     * Returns the current measure for a watch. Could be 
     * equal to lastCompleteMeasure() or an ongoing measure (i.e. 1/2)
     */
    currentMeasure():Measure {
        if(this.measures.length !== 0) {
            return this.measures[this.measures.length - 1];
        }else {
            return null;
        }
    }

    /**
     * Add or update a measure depending on the measure id
     * @param measure 
     */
    upsertMeasure(measure:Measure) {

        for (var i = 0; i < this.measures.length; i++) {
            console.log("i", i);
            if(this.measures[i].id === measure.id) {
                this.measures[i] = measure;
                return;
            }
        }
        this.historySize++;
        this.measures.push(measure);
    }

    /**
     * Returns a clone watch
     */
    clone():Watch {
        return new Watch(
            this.id,
            this.brand,
            this.historySize,
            this.measures,
            this.name,
            this.yearOfBuy,
            this.serial,
            this.caliber
        );
    }
}

/**
 * Actions doable with a watch
 */
export enum WatchAction {
    Measure, Waiting, Accuracy
}

/**
 * Special status for a watch
 */
export enum WatchStatus {
    NeverMeasured,
    HaveMoreMeasures
}
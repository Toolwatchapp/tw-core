import { Measure } from './measure.model';
export declare class Watch {
    id: number;
    brand: string;
    historySize: number;
    measures: Measure[];
    name: string;
    yearOfBuy: number;
    serial: string;
    caliber: string;
    status: WatchStatus;
    constructor(id: number, brand: string, historySize?: number, measures?: Measure[], name?: string, yearOfBuy?: number, serial?: string, caliber?: string);
    currentMeasure(): Measure;
}
export declare enum WatchStatus {
    None = 0,
    NeverMeasured = 2,
    HaveMoreMeasures = 4,
}

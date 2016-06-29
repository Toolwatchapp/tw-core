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
    next: WatchAction;
    waiting: number;
    constructor(id: number, brand: string, historySize?: number, measures?: Measure[], name?: string, yearOfBuy?: number, serial?: string, caliber?: string);
    currentMeasure(): Measure;
    upsertMeasure(measure: Measure): void;
}
export declare enum WatchAction {
    Measure = 0,
    Waiting = 1,
    Accuracy = 2,
}
export declare enum WatchStatus {
    None = 0,
    NeverMeasured = 2,
    HaveMoreMeasures = 4,
}

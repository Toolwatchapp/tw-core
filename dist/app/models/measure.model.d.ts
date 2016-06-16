export declare class Measure {
    id: number;
    measureUserTime: number;
    measureReferenceTime: number;
    accuracyUserTime: number;
    accuracyReferenceTime: number;
    accuracy: number;
    accuracyAge: number;
    percentile: number;
    status: MeasureStatus;
    constructor(id: number, measureUserTime: number, measureReferenceTime: number, status?: number, accuracyUserTime?: number, accuracyReferenceTime?: number, accuracy?: number, accuracyAge?: number, percentile?: number);
    addBaseMeasure(referenceTime: number, userTime: number): void;
    addAccuracyMeasure(referenceTime: number, userTime: number): void;
    addAccuracy(accuracy: number, accuracyAge: number, percentile: number): void;
    private computePostAccuracyStatus(accuracy, accuracyAge);
}
export declare enum MeasureStatus {
    None = 0,
    BaseMeasure = 1,
    AccuracyMeasure = 2,
    ArchivedMeasure = 4,
    ShouldBeServiced = 8,
    ShouldBeRenewed = 16,
}

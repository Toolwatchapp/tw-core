export class Measure {

    id:number;
    measureUserTime:number;
    measureReferenceTime:number;
    accuracyUserTime:number;
    accuracyReferenceTime:number;
    accuracy:number;
    accuracyAge:number;
    percentile:number;
    status: MeasureStatus = MeasureStatus.None;
    serviced:boolean = false;
    renewed:boolean = false;

    constructor(
        id: number, 
        measureUserTime: number, 
        measureReferenceTime: number, 
        status?: number, 
        accuracyUserTime?: number, 
        accuracyReferenceTime?: number, 
        accuracy?: number, 
        accuracyAge?: number, 
        percentile?: number
    ) {

        this.id = id;
        this.measureUserTime = measureUserTime;
        this.measureReferenceTime = measureReferenceTime;
        this.accuracyUserTime = accuracyUserTime;
        this.accuracyReferenceTime = accuracyReferenceTime;
        this.accuracy = accuracy;
        this.accuracyAge = accuracyAge;
        this.percentile = Math.round(percentile*10)/10;

        if(status >= 1) {
            this.status |= MeasureStatus.BaseMeasure;
        }

        if(status >= 2) {
            this.status |= MeasureStatus.AccuracyMeasure;
        }

        if (status >= 3) {
            this.status |= MeasureStatus.ArchivedMeasure;
        }

        if(accuracyAge > 30) {
            this.renewed = true;
            this.status |= MeasureStatus.ShouldBeRenewed;
        }

        if(Math.abs(accuracy) > 20) {
            this.serviced = true;
            this.status |= MeasureStatus.ShouldBeServiced;
        }

        this.computePostAccuracyStatus(accuracy, accuracyAge);
    }

    public toString = () : string => {
        return `Measure (id: ${this.id},
        measureUserTime: ${this.measureUserTime},
        measureReferenceTime: ${this.measureReferenceTime},
        accuracyUserTime: ${this.accuracyUserTime},
        accuracyReferenceTime: ${this.accuracyReferenceTime},
        accuracy: ${this.accuracy},
        accuracyAge: ${this.accuracyAge},
        percentile: ${this.percentile},
        status: ${this.status})`;
    }

    addBaseMeasure(referenceTime:number, userTime:number) {
        this.measureReferenceTime = referenceTime;
        this.measureUserTime = userTime;
        this.status |= MeasureStatus.BaseMeasure;
    }

    addAccuracyMeasure(referenceTime: number, userTime: number) {
        this.accuracyReferenceTime = referenceTime;
        this.accuracyUserTime = userTime;
        this.status |= MeasureStatus.AccuracyMeasure;
    }

    addAccuracy(accuracy:number, accuracyAge:number, percentile:number) {
        console.log("addAccuracy", accuracy,accuracyAge,percentile);
        this.accuracy = accuracy;
        this.accuracyAge = accuracyAge;
        this.percentile = Math.round(percentile*10)/10;
        this.computePostAccuracyStatus(accuracy, accuracyAge);
    }

    private computePostAccuracyStatus(accuracy:number, accuracyAge:number) {
        if (accuracy != null && accuracyAge != null) {
            if (Math.abs(accuracy) > 20) {
                this.status |= MeasureStatus.ShouldBeServiced;
                this.serviced = true;
            }

            if (accuracyAge > 30) {
                this.renewed = true;
                this.status |= MeasureStatus.ShouldBeRenewed;
            }
        }
    }
}

export enum MeasureStatus {
    None = 0,
    BaseMeasure = 1 << 0,
    AccuracyMeasure = 1 << 1,
    ArchivedMeasure = 1 << 2,
    ShouldBeRenewed = 1 << 3,
    ShouldBeServiced = 1 << 4
}
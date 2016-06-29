export class Measure{

	id:number;
	measureUserTime:number;
	measureReferenceTime:number;
	accuracyUserTime:number;
	accuracyReferenceTime:number;
	accuracy:number;
	accuracyAge:number;
	percentile:number;
	status: MeasureStatus = MeasureStatus.None;

	constructor(id: number, measureUserTime: number, measureReferenceTime: number, 
		status?: number, accuracyUserTime?: number, accuracyReferenceTime?: number, 
		accuracy?: number, accuracyAge?: number, percentile?: number){

		this.id = id
		this.measureUserTime = measureUserTime;
		this.measureReferenceTime = measureReferenceTime;
		this.accuracyUserTime = accuracyUserTime;
		this.accuracyReferenceTime = accuracyReferenceTime;
		this.accuracy = accuracy;
		this.accuracyAge = accuracyAge;
		this.percentile = percentile;

		if(status >= 1){
			this.status |= MeasureStatus.BaseMeasure;
		}

		if(status >= 2){
			this.status |= MeasureStatus.AccuracyMeasure;
		}

		if (status >= 3) {
			this.status |= MeasureStatus.ArchivedMeasure;
		}

		this.computePostAccuracyStatus(accuracy, accuracyAge);
	}


	addBaseMeasure(referenceTime:number, userTime:number){
		this.measureReferenceTime = referenceTime;
		this.measureUserTime = userTime;
		this.status |= MeasureStatus.BaseMeasure;
	}

	addAccuracyMeasure(referenceTime: number, userTime: number) {
		this.accuracyReferenceTime = referenceTime;
		this.accuracyUserTime = userTime;
		this.status |= MeasureStatus.AccuracyMeasure;
	}

	addAccuracy(accuracy:number, accuracyAge:number, percentile:number){
		console.log("addAccuracy", accuracy,accuracyAge,percentile);
		this.accuracy = accuracy;
		this.accuracyAge = accuracyAge;
		this.percentile = percentile;
		this.computePostAccuracyStatus(accuracy, accuracyAge);
	}

	private computePostAccuracyStatus(accuracy:number, accuracyAge:number){
		if (accuracy != null && accuracyAge != null) {
			if (Math.abs(accuracy) > 30) {
				this.status |= MeasureStatus.ShouldBeServiced;
			}

			if (accuracyAge > 30) {
				this.status |= MeasureStatus.ShouldBeRenewed;
			}
		}
	}
}

export enum MeasureStatus{
	None = 0,
	BaseMeasure = 1 << 0,
	AccuracyMeasure = 1 << 1,
	ArchivedMeasure = 1 << 2,
	ShouldBeServiced = 1 << 3,
	ShouldBeRenewed = 1 << 4
}
export class Measure{

	id:number;
	measureUserTime:number;
	measureReferenceTime:number;
	accuracyUserTime:number;
	accuracyReferenceTime:number;
	accuracy:number;
	accuracyAge:number;
	status: MeasureStatus = MeasureStatus.None;


	constructor(id: number, measureUserTime: number, measureReferenceTime: number, 
		status: MeasureStatus, accuracyUserTime?: number, accuracyReferenceTime?: number, 
		accuracy?: number, accuracyAge?: number){

		this.id = id
		this.measureUserTime = measureUserTime;
		this.measureReferenceTime = measureReferenceTime;
		this.accuracyUserTime = accuracyUserTime;
		this.accuracyReferenceTime = accuracyReferenceTime;
		this.accuracy = accuracy;
		this.accuracyAge = accuracyAge;

		if(status >= 1){
			this.status |= MeasureStatus.BaseMeasure;
		}

		if(status >= 2){
			this.status |= MeasureStatus.AccuracyMeasure;
		}

		if (status >= 3) {
			this.status |= MeasureStatus.ArchivedMeasure;
		}

		//Checks if optional args are provided
		//http://stackoverflow.com/a/29990025/1871890
		if(accuracy != null && accuracyAge != null){
			if(Math.abs(accuracy) > 30){
				this.status |= MeasureStatus.ShouldBeServiced;
			}

			if(accuracyAge > 30){
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
import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'clock',
  template: ''
})
export class ClockComponent implements OnInit {

  month:string;
  day:string;
  date:Date;
  nextLeap:number;
  monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  constructor(private elementRef: ElementRef) {

	this.date = new Date();
	this.month = this.monthNames[this.date.getMonth()];
	this.day = this.dayNames[this.date.getDay()] + " " + this.date.getDate();

	this.nextLeap = this.date.getFullYear();

	while(!this.isLeapYear(this.nextLeap)){
		this.nextLeap++;
	}
  }

  ngAfterViewInit() {
	  this.initLocalClocks();
  } 

  isLeapYear(year:number){
	return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
  }

  initLocalClocks() {

    var milliseconds = this.date.getMilliseconds();
	var seconds = this.date.getSeconds();
	var minutes = this.date.getMinutes();
	var hours = this.date.getHours();

	// Create an object with each hand and it's angle in degrees
	var hands = [
		{
			hand: 'hours',
			angle: (hours * 30) + (minutes / 2)
		},
		{
			hand: 'minutes',
			angle: (minutes * 6) + (seconds/60) * 6
		},
		{
			hand: 'seconds',
			angle: (seconds * 6) + (milliseconds/1000)*6
		}
	];

	//Loop through each of these hands to set their angle
	for (var j = 0; j < hands.length; j++) {
		var element = this.elementRef.nativeElement.querySelector(
			'.' + hands[j].hand
		);

		element.style.webkitTransform = 'rotateZ(' + hands[j].angle + 'deg)';
		element.style.transform = 'rotateZ(' + hands[j].angle + 'deg)';
	}
  }

  ngOnInit() {
  }



}

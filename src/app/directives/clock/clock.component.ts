import { Component, ElementRef, OnInit } from '@angular/core';
import { MoonPhasesComponent } from './moon-phases/moon-phases.component';

@Component({
  selector: 'clock',
  templateUrl: 'app/directives/clock/clock.component.html',
  styleUrls: ['app/directives/clock/clock.component.css'],
  directives: [MoonPhasesComponent]
})
export class ClockComponent implements OnInit {

  month:string;
  day:string;
  date:Date;
  monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  constructor(private elementRef: ElementRef) {

	this.date = new Date();
	this.month = this.monthNames[this.date.getMonth()];
	this.day = this.dayNames[this.date.getDay()] + " " + this.date.getDay();
  }

  ngAfterViewInit() {
	  this.initLocalClocks();
  }

  initLocalClocks() {

	var seconds = this.date.getSeconds()+1;
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
			angle: (minutes * 6)
		},
		{
			hand: 'seconds',
			angle: (seconds * 6)
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

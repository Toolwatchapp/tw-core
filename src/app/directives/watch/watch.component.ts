import { Component, ElementRef, OnInit } from '@angular/core';
import { MoonPhasesComponent } from './moon-phases/moon-phases.component';

@Component({
  selector: 'app-watch',
  templateUrl: 'app/directives/watch/watch.component.html',
  styleUrls: ['app/directives/watch/watch.component.css'],
  directives: [MoonPhasesComponent]
})
export class WatchComponent implements OnInit {

  month:string;
  day:string;
  monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  constructor(private elementRef: ElementRef) {

	var d:Date = new Date();
	this.month = this.monthNames[d.getMonth()];
	this.day = this.dayNames[d.getDay()] + " " + d.getDay();
  }

  ngAfterViewInit() {
	  this.initLocalClocks();
  }

  initLocalClocks() {

	// Get the local time using JS
	var date = new Date;
	var seconds = date.getSeconds();
	var minutes = date.getMinutes();
	var hours = date.getHours();

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

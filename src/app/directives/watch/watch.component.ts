import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-watch',
  templateUrl: 'app/directives/watch/watch.component.html',
  styleUrls: ['app/directives/watch/watch.component.css']
})
export class WatchComponent implements OnInit {

  constructor(private elementRef: ElementRef) {}

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

	console.log(this.elementRef.nativeElement.querySelector('.seconds'));

	//Loop through each of these hands to set their angle
	for (var j = 0; j < hands.length; j++) {
		var element = this.elementRef.nativeElement.querySelector(
			'.' + hands[j].hand
		);
		console.log(element);

		element.style.webkitTransform = 'rotateZ(' + hands[j].angle + 'deg)';
		element.style.transform = 'rotateZ(' + hands[j].angle + 'deg)';
	}
  }

  ngOnInit() {
  }

}

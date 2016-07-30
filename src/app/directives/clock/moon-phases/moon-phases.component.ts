import { Component, OnInit, ElementRef } from '@angular/core';
import { Astro } from './../astro';

import { Wove } from 'aspect.js/dist/lib/aspect';
import { LoggerAspect } from './../../../aspects/logger.aspect';

@Wove(LoggerAspect)
@Component({
  selector: 'moon-phases',
  template: '',
  // templateUrl: 'app/directives/clock/moon-phases/moon-phases.component.html',
  // styleUrls: ['app/directives/clock/moon-phases/moon-phases.component.css']
})
export class MoonPhasesComponent extends Astro implements OnInit {
  
  constructor(private elementRef: ElementRef) {
  	super();
	this.illum = this.getMoonIllumination(new Date());
	this.pos = this.getMoonPosition(new Date(), 0, 0);
	this.angleMoon = this.illum.angle - this.pos.parallacticAngle;
	console.log(this.illum.angle-this.pos.parallacticAngle);
	console.log();
  }

  ngAfterViewInit() {
	let elem = this.elementRef.nativeElement.querySelector('.moon-disque')
	elem.style.webkitTransform = 'rotateZ(' + this.angleMoon*360 + 'deg)';
	elem.style.transform = 'rotateZ(' + this.angleMoon*360 + 'deg)';
  }

  ngOnInit() {
  }
}

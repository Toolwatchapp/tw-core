import { Component, OnInit, ElementRef } from '@angular/core';
import { Astro } from './../astro';

@Component({
  selector: 'moon-phases',
  template: `<div class="moon-phase-container">
               <div class="moon-mask"></div>
               <div class="moon-disque"></div>
             </div>
             `
})
export class MoonPhasesComponent extends Astro implements OnInit {
  
  constructor(private elementRef: ElementRef) {
  	super();
	  this.illum = this.getMoonIllumination(new Date());
	  this.pos = this.getMoonPosition(new Date(), 0, 0);
	  this.angleMoon = this.illum.angle - this.pos.parallacticAngle;
  }

  ngAfterViewInit() {
  	let elem = this.elementRef.nativeElement.querySelector('.moon-disque')
  	elem.style.webkitTransform = 'rotateZ(' + this.angleMoon*360 + 'deg)';
  	elem.style.transform = 'rotateZ(' + this.angleMoon*360 + 'deg)';
  }

  ngOnInit() {
  }
}

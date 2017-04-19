import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'moon-phases',
  template: `<div class="moon-phase-container">
    <div class="moon-mask"></div>
    <div class="moon-disque"></div>
</div>
`
})
export class MoonPhasesComponent implements OnInit {

  angleMoon:number;
  
  constructor(private elementRef: ElementRef) {

      let today:Date = new Date();
      let lastFullMoon = new Date(2016, 10, 14, 12, 0, 0, 0);
      let diffDays = Math.round(Math.abs((today.getTime() - lastFullMoon.getTime())/(24*60*60*1000)));

      this.angleMoon = diffDays * 6.101694915254;   
  }

  ngAfterViewInit() {
      let elem = this.elementRef.nativeElement.querySelector('.moon-disque');
      elem.style.webkitTransform = 'rotateZ(' + this.angleMoon + 'deg)';
      elem.style.transform = 'rotateZ(' + this.angleMoon + 'deg)';
  }

  ngOnInit() {
  }
}

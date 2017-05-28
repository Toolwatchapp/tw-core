import { Component, ElementRef, NgModule } from '@angular/core';
import { MoonPhasesComponentModule } from './moon-phases/moon-phases.component';
import { CommonModule } from '@angular/common'; 
@Component({
    template: `
        <article class="clock">
            <div class="logo"></div>
            <div class="date month">{{month}}</div>
            <div class="date day">{{day}}</div>
            <moon-phases></moon-phases>
            <div class="hours-container">
                <div class="hours"></div>
            </div>
            <div class="minutes-container">
                <div class="minutes"></div>
            </div>
            <div class="seconds-container">
                <div class="seconds"></div>
            </div>
        </article>
    `
})
export class ClockComponent {

    month: string;
    day: string;
    date: Date;
    nextLeap: number;
    monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    /**
     * 
     * @param elementRef 
     */
    constructor(private elementRef: ElementRef) {

        this.date = new Date();
        this.month = this.monthNames[this.date.getMonth()];
        this.day = this.dayNames[this.date.getDay()] + " " + this.date.getDate();

        this.nextLeap = this.date.getFullYear();

        while (!this.isLeapYear(this.nextLeap)) {
            this.nextLeap++;
        }
    }

    /**
     * Returns wether or not a year is leap
     * @param year 
     */
    isLeapYear(year: number): boolean {
        return ((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0);
    }

    /**
     * Moves the hands
     */
    initLocalClocks(): void {

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
                angle: (minutes * 6) + (seconds / 60) * 6
            },
            {
                hand: 'seconds',
                angle: (seconds * 6) + (milliseconds / 1000) * 6
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
}


@NgModule({
  declarations: [ClockComponent],
  imports: [CommonModule, MoonPhasesComponentModule],
  exports: [ClockComponent]
})
export class ClockComponentModule { }
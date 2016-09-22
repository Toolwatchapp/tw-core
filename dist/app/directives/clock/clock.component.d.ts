import { ElementRef, OnInit } from '@angular/core';
export declare class ClockComponent implements OnInit {
    private elementRef;
    month: string;
    day: string;
    date: Date;
    nextLeap: number;
    monthNames: string[];
    dayNames: string[];
    constructor(elementRef: ElementRef);
    ngAfterViewInit(): void;
    isLeapYear(year: number): boolean;
    initLocalClocks(): void;
    ngOnInit(): void;
}

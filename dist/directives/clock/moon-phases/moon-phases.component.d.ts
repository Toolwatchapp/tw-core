import { OnInit, ElementRef } from '@angular/core';
export declare class MoonPhasesComponent implements OnInit {
    private elementRef;
    angleMoon: number;
    constructor(elementRef: ElementRef);
    ngAfterViewInit(): void;
    ngOnInit(): void;
}

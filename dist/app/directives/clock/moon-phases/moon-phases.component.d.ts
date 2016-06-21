import { OnInit, ElementRef } from '@angular/core';
import { Astro } from './../astro';
export declare class MoonPhasesComponent extends Astro implements OnInit {
    private elementRef;
    constructor(elementRef: ElementRef);
    ngAfterViewInit(): void;
    ngOnInit(): void;
}

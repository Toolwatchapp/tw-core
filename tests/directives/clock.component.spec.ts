import { ComponentFixture, TestBed, async, fakeAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ClockComponent } from './../../src/directives/clock/clock.component';
import { MoonPhasesComponent } from './../../src/directives/clock/moon-phases/moon-phases.component';

describe('ClockComponent (inline template)', () => {

    let comp: ClockComponent;
    let fixture: ComponentFixture<ClockComponent>;
    //   let de:      DebugElement;
    //   let el:      HTMLElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ClockComponent, MoonPhasesComponent], // declare the test component
            imports: [],
            providers: [

            ]
        })
            .compileComponents()
            .then(() => {
                fixture = TestBed.createComponent(ClockComponent);
                comp = fixture.componentInstance;
                comp.date = new Date(2016, 1, 1, 1, 1, 1, 1);
            });
    }));

    it('should have 2020 as next leap', () => {

        expect(comp.nextLeap).toEqual(2020);
    });

    it('should return that 2016 is leap', () => {

        expect(comp.isLeapYear(2016)).toBeTruthy();
    });

    it('should return that 2017 isnt leap', () => {

        expect(comp.isLeapYear(2017)).toBeFalsy();
    });

    it('should move the hands', fakeAsync(() => {

        comp.initLocalClocks();

        let hours = fixture.debugElement.query(By.css(".hours"));
        let minutes = fixture.debugElement.query(By.css(".minutes"));
        let seconds = fixture.debugElement.query(By.css(".seconds"));


        expect(hours.nativeElement.style.cssText.toString().indexOf("rotateZ(30.5deg)")).toBeGreaterThan(-1);
        expect(minutes.nativeElement.style.cssText.toString().indexOf("rotateZ(6.1deg)")).toBeGreaterThan(-1);
        expect(seconds.nativeElement.style.cssText.toString().indexOf("rotateZ(6.006deg)")).toBeGreaterThan(-1);

        comp.date = new Date(2016, 1, 1, 12, 12, 12, 1);
        comp.initLocalClocks();

        expect(hours.nativeElement.style.cssText.toString().indexOf("rotateZ(366deg)")).toBeGreaterThan(-1);
        expect(minutes.nativeElement.style.cssText.toString().indexOf("rotateZ(73.2deg)")).toBeGreaterThan(-1);
        expect(seconds.nativeElement.style.cssText.toString().indexOf("rotateZ(72.006deg)")).toBeGreaterThan(-1);



    }));


});
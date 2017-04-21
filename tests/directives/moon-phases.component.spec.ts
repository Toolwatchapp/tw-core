import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { MoonPhasesComponent } from './../../src/directives/clock/moon-phases/moon-phases.component';

describe('MoonPhasesComponent (inline template)', () => {

    let comp: MoonPhasesComponent;
    let fixture: ComponentFixture<MoonPhasesComponent>;
    //   let de:      DebugElement;
    //   let el:      HTMLElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [MoonPhasesComponent], // declare the test component
            imports: [],
            providers: [

            ]
        })
            .compileComponents()
            .then(() => {
                fixture = TestBed.createComponent(MoonPhasesComponent);
                comp = fixture.componentInstance;
            });
    }));

    it('should rotate the moon', () => {

        let moon = fixture.debugElement.query(By.css(".moon-disque"));

        comp.ngAfterViewInit();

        expect(moon.nativeElement.style.cssText.toString().indexOf("rotateZ")).toBeGreaterThan(-1);

    });

});
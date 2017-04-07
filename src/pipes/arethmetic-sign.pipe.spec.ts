import { Component } from '@angular/core';
import { TestBed, async } from '@angular/core/testing';
import { ArethmeticSign } from './arethmetic-sign.pipe';
@Component({
    selector: 'test',
    template: `
    <p>{{ text | echo }}</p>
    `
})
class TestComponent {
    text: string;
}
describe('EchoPipe', () => {
beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [TestComponent, ArethmeticSign]
        });
    });
beforeEach(async(() => {
        TestBed.compileComponents();
    }));
it('works well', async(() => {
        const fixture = TestBed.createComponent(TestComponent);
        fixture.componentInstance.text = '3.0';
        fixture.detectChanges();
        const el = fixture.debugElement.nativeElement as HTMLElement; 
        expect(el.querySelector('p').textContent).toBe('+3.0');
    }));
});
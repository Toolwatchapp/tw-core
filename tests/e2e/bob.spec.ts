import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { TranslateService } from '@ngx-translate/core';
import { EventEmitter } from '@angular/core';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { TwAPIService } from './../../src/services/twapi.service';
import { ConfigurationService, configurationProvider } from './../../src/services/configuration.service';
import { SignupComponent } from './../../src/directives/signup/signup.component';
import { AnalyticsService } from './../../src/services/analytics.service';

describe('bob', () => {

    let countryEmitter = new EventEmitter();
    let translateServiceStub = {
        setDefaultLang(lang: string) { },
        use(lang: string) { },
        get(key: string) { return countryEmitter; }
    };
    let comp: SignupComponent;
    let fixture: ComponentFixture<SignupComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SignupComponent],
            providers: [
                { provide: TranslateService, useValue: translateServiceStub },
                { provide: ConfigurationService, useValue: 
                    configurationProvider("http://192.168.0.112:8282/api/", "assets") },
                TwAPIService,
                AnalyticsService
            ],
            imports: [
                ReactiveFormsModule,
                HttpModule
            ]
        }).compileComponents().then(() => {
            
            fixture = TestBed.createComponent(SignupComponent);
            comp = fixture.componentInstance;
        });;
        
    }));

    it('should work', () => {

        fixture.whenStable().then(() => { // wait for async getQuote
            fixture.detectChanges();        // update view with quote
            expect(true).toEqual(true);
        });

        
    }, 25000);

});
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { TranslateService } from '@ngx-translate/core';
import { EventEmitter } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { Http } from '@angular/http';
import {
    Validators,
    FormBuilder
} from '@angular/forms';
import { Injectable } from '@angular/core';


@Injectable()
export class CfgService {

    constructor(private baseUrl: string, private assetsUrl: string) { }

    public getAPIUrl(): string {
        return this.baseUrl;
    }

    public getAssetsUrl(): string {
        return this.assetsUrl;
    }
}

@Injectable()
export class APIService {
    constructor(
        public http: Http,
        public config: CfgService) {
    }
}

export function configurationProvider(
    baseUrl: string = "https://xxx.xxx/api/",
    assetsUrl: string = "assets"): CfgService {

    return new CfgService(baseUrl, assetsUrl);
}

@Component({
    template: ''
})
export class MyComponent {

    constructor(
        protected translate: TranslateService,
        private api: APIService,
        private formBuilder: FormBuilder
    ) {

    }
}


describe('bob', () => {
    let comp: MyComponent;
    let fixture: ComponentFixture<MyComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [MyComponent],
            providers: [
                { provide: CfgService, useValue: configurationProvider("http://192.168.0.112:8282/api/") },
                APIService
            ],
            imports: [
                FormsModule,
                HttpModule
            ]
        }).compileComponents().then(() => {
            fixture = TestBed.createComponent(MyComponent);
            comp = fixture.componentInstance;
        });;
    }));

    it('should work', async(() => {

        expect(true).toEqual(true);
    }));

});
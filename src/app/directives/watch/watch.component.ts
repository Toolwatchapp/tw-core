import { Component, Input, EventEmitter, Output, OnInit } from '@angular/core';
import {FORM_DIRECTIVES, FormBuilder, Control, ControlGroup, Validators}  from '@angular/common';
import {TRANSLATE_PROVIDERS, TranslateService, TranslatePipe, TranslateLoader, TranslateStaticLoader} from 'ng2-translate/ng2-translate';
import { Watch } from './../../models/watch.model';
import { User } from './../../models/user.model';
import {TwAPIService} from './../../services/twapi.service';
import {Http, HTTP_PROVIDERS, Headers}  from '@angular/http';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';

@Component({
  selector: 'watch-form',
  templateUrl: 'app/directives/watch/watch.component.html',
  styleUrls: ['app/directives/watch/watch.component.css'],
  pipes: [TranslatePipe],
  providers: [TwAPIService, HTTP_PROVIDERS],
  directives: [FORM_DIRECTIVES, MD_BUTTON_DIRECTIVES]
})
export class WatchComponent implements OnInit {

  @Input() watchModel: Watch;
  @Input() user: User;
  @Output() watchSaved = new EventEmitter();

  watchForm: ControlGroup;
  brand: Control = new Control('', Validators.required);
  model: Control = new Control();
  caliber: Control = new Control();
  year: Control = new Control('', Validators.compose(
    [Validators.maxLength(4),
    Validators.minLength(4),
    Validators.pattern('1[0-9]+')]
  ));
  serial: Control = new Control();
  brands: { name: string, icon: string, models: string }[] = [];
  models: string[] = [];
  filteredBrandList: { name: string, icon: string, models: string }[] = [];
  filteredModelList: string[] = [];
  error:boolean = false;
  submitAttempt:boolean = false;

  constructor(private translate: TranslateService,
    private twapi: TwAPIService, private builder: FormBuilder) {
    //use navigator lang if available
    //Lang definition
    var userLang = navigator.language.split('-')[0];
    userLang = /(fr|en)/gi.test(userLang) ? userLang : 'en';
    translate.setDefaultLang('en');
    translate.use(userLang);

    this.twapi.getBrands().then(
      res => {
        this.brands = res;
      }
    );

    this.watchForm = builder.group({
      brand: this.brand,
      model: this.model,
      caliber: this.caliber,
      year: this.year,
      serial: this.serial
    });

    if(this.watchModel === undefined){
      this.watchModel = new Watch(null, null);
    }
  }

  selectBrand(brand: string){
    this.twapi.getModels(brand).then(
      res => this.models = res,
      error => this.models = []
    );
    this.filteredBrandList = [];
    this.watchModel.brand = brand;
  }

  selectModel(model: string) {
    this.filteredModelList = [];
    this.watchModel.name = model;
  }

  filterBrand(brand: string) {
    this.filteredBrandList = this.brands.filter(function(element: { name: string, icon: string, models: string }) {
      return element.name.toLowerCase().indexOf(brand.toLowerCase()) > -1;
    });
  }

  filterModel(model:string){
    this.filteredModelList = this.models.filter(function(element:string) {
      return element.toLowerCase().indexOf(model.toLowerCase()) > -1;
    });
  }

  ngOnInit() {
  }

  onSubmit(){
    this.submitAttempt = true;

    if (this.watchForm.valid) {
      this.twapi.upsertWatch(this.watchModel).then(
        res => this.watchSaved.emit(res),
        error => this.error = true
      );
    }
  }

  onDelete(){
    this.twapi.deleteWatch(this.user, this.watchModel).then(
      res => this.watchSaved.emit(res),
      error => this.error = true
    );
  }
}

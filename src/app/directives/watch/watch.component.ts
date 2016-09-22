import { Component, Input, EventEmitter, Output, OnInit } from '@angular/core';
import {TRANSLATE_PROVIDERS, TranslateService, TranslatePipe, TranslateLoader, TranslateStaticLoader} from 'ng2-translate/ng2-translate';
import { Watch } from './../../models/watch.model';
import { User } from './../../models/user.model';
import {TwAPIService} from './../../services/twapi.service';
import {Http, HTTP_PROVIDERS, Headers}  from '@angular/http';
import { GAService } from './../../services/ga.service';
import { FormHelper } from './../../helpers/form.helper';
import {Control, ControlGroup, Validators}  from '@angular/common';

import {   
  REACTIVE_FORM_DIRECTIVES,  
  FormBuilder,  
  FormGroup,
  FormControl
} from '@angular/forms';

@Component({
  selector: 'watch-form',
  templateUrl: 'base/dist/app/directives/watch/watch.component.html',
  styleUrls: ['app/directives/watch/watch.component.css'],
  pipes: [TranslatePipe],
  providers: [TwAPIService, HTTP_PROVIDERS],
  directives: [REACTIVE_FORM_DIRECTIVES]
})
/**
 * From to add, delete and update watches
 */
export class WatchComponent implements OnInit {

  watchModel: Watch = new Watch(null, null);
  user: User;
  @Output() watchSaved = new EventEmitter();

  watchForm        : FormGroup;
  brands           : { name: string, icon: string, models: string }[] = [];
  models           : string[] = [];
  filteredBrandList: { name: string, icon: string, models: string }[] = [];
  filteredModelList: string[] = [];
  error            : boolean = false;
  submitAttempt    : boolean = false;

  /**
   * Constructor with DI
   * @param {TranslateService} private translate [description]
   * @param {TwAPIService}     private twapi     [description]
   * @param {FormBuilder}      private builder   [description]
   */
  constructor(
    protected translate: TranslateService,
    private twapi      : TwAPIService, 
    private builder    : FormBuilder
  ) {

    translate.setDefaultLang('en');
    translate.use('en');

    console.log(this.watchModel);
    console.log(this.user);

    this.watchForm = FormHelper.group(this.builder, {
      id     : [],
      brand  : [<any>Validators.required],
      name   : [],
      caliber: [],
      year   : [<any>Validators.minLength(4),  <any>Validators.maxLength(4)],
      serial : []
    });
  }

  fillFormValue(){

    FormHelper.updateValue(this.watchForm, "id", this.watchModel.id);
    FormHelper.updateValue(this.watchForm, "brand", this.watchModel.brand);
    FormHelper.updateValue(this.watchForm, "name", this.watchModel.name);
    FormHelper.updateValue(this.watchForm, "caliber", this.watchModel.caliber);
    FormHelper.updateValue(this.watchForm, "year", this.watchModel.yearOfBuy);
    FormHelper.updateValue(this.watchForm, "serial", this.watchModel.serial);
  }

  /**
   * Pull the brands
   */
  ngAfterViewInit() {
    //Get the known brands
    this.twapi.getBrands().then(
      res => {
        this.brands = res;
      }
    );
  }


  /**
   * [selectBrand description]
   * @param {string} brand [description]
   */
  selectBrand(brand: string){
    this.twapi.getModels(brand.toLowerCase()).then(
      res   => this.models = res,
      error => this.models = []
    );
    this.filteredBrandList = [];
    FormHelper.updateValue(this.watchForm, 'brand', brand);
  }

  /**
   * Select a model
   * @param {string} model [description]
   */
  selectModel(model: string) {
    this.filteredModelList = [];
    FormHelper.updateValue(this.watchForm, 'name', model);
  }

  /**
   * Filter brands according the brand
   * @param {string} brand [description]
   */
  filterBrand(brand: string) {
    this.filteredBrandList = this.brands.filter(
      function(element: { name: string, icon: string, models: string }) {
        return element.name.toLowerCase().indexOf(brand.toLowerCase()) > -1;
    });
  }

  /**
   * Filters models according to model
   * @param {string} model [description]
   */
  filterModel(model:string){
    this.filteredModelList = this.models.filter(function(element:string) {
      return element.toLowerCase().indexOf(model.toLowerCase()) > -1;
    });
  }

  ngOnInit() {
  }

  /**
   * Submit a watch
   */
  onSubmit(){
    this.submitAttempt = true;

    if (this.watchForm.valid) {

      

      this.twapi.upsertWatch(this.watchFromForm()).then(
        res => {
          GAService.event('CTA', 'WATCH_UPSERT', 'SUCCESS');
          this.user.upsertWatch(res);
          this.watchSaved.emit(this.user)
        },
        error => {
          GAService.event('CTA', 'WATCH_UPSERT', 'FAIL');
          this.error = true
        }
      );
    }
  }

  onDelete(){
    this.twapi.deleteWatch(this.user, this.watchFromForm()).then(
      res => {
        GAService.event('CTA', 'WATCH_DELETE', 'SUCCESS');
        this.watchSaved.emit(res)
      },
      error => {
        GAService.event('CTA', 'WATCH_DELETE', 'FAIL');
        this.error = true
      }
    );
  }

  private watchFromForm():Watch{
    return new Watch(
        (this.watchForm.value.id == "") ? null : this.watchForm.value.id, 
        this.watchForm.value.brand,
        this.watchModel.historySize,
        this.watchModel.measures,
        this.watchForm.value.name,
        this.watchForm.value.year,
        this.watchForm.value.serial,
        this.watchForm.value.caliber
      );
  }
}

import { Component, EventEmitter, Output } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';

import { Watch } from './../../models/watch.model';
import { User } from './../../models/user.model';
import { TwAPIService } from './../../services/twapi.service';

import {   
  FormBuilder,  
  FormGroup,
  Validators
} from '@angular/forms';

/**
 * From to add, delete and update watches
 */
@Component({
  template: ''
})
export class WatchComponent {

  user: User; 
  watchModel: Watch = new Watch(null, "");
  watchForm: FormGroup;
  brands: { name: string, icon: string, models: string }[] = [];
  models: string[] = [];
  calibers: string[] = [];
  filteredBrandList: { name: string, icon: string, models: string }[] = [];
  filteredModelList: string[] = [];
  filteredCaliberList: string[] = [];
  error: boolean = false;
  submitAttempt: boolean = false;
  brandSelected: boolean = false;
  modelSelected: boolean = false;
  caliberSelected: boolean = false;

  @Output() watchSaved = new EventEmitter();
  
  /**
   * Constructor with DI
   * @param {TranslateService} private translate
   * @param {TwAPIService}     private twapi    
   * @param {FormBuilder}      private builder  
   */
  constructor(
    protected translate: TranslateService,
    private   twapi: TwAPIService, 
    private   formBuilder: FormBuilder,
  ) {

    translate.setDefaultLang('en');
    translate.use('en');
    
    this.watchForm = this.formBuilder.group({
      id     : this.watchModel.id,
      brand  : [this.watchModel.brand,  Validators.required],
      name   : [this.watchModel.name, Validators.required],
      caliber: this.watchModel.caliber,
      year   : [this.watchModel.yearOfBuy, Validators.compose(
        [Validators.minLength(4),  Validators.maxLength(4)]
      )],
      serial : this.watchModel.serial
    });

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
  selectBrand(brand: { name: string, icon: string, models:string}) {
    this.brandSelected = true;
    this.twapi.getModels(brand.models.toLowerCase()).then(
      res   => this.models = res
    );
    
    this.twapi.getCalibers(brand.models.toLowerCase()).then(
      res   => this.calibers = res
    );

    this.filteredBrandList = [];
    this.watchModel.brand = brand.name;
  }

  /**
   * Select a model
   * @param {string} model [description]
   */
  selectModel(model: string) {
    this.modelSelected = true;
    this.filteredModelList = [];
    this.watchModel.name = model;
  }

  /**
   * Select a caliber
   * @param {string} caliber [description]
   */
  selectCaliber(caliber: string) {
    this.caliberSelected = true;
    this.filteredCaliberList = [];
    this.watchModel.caliber = caliber;
  }

  /**
   * Filter brands according the brand
   * @param {string} brand [description]
   */
  filterBrand(brand: string) {

    if(this.brandSelected === false) {
      this.filteredBrandList = this.brands.filter(
        function(element: { name: string, icon: string, models: string }) {
          return element.name.toLowerCase().indexOf(brand.toLowerCase()) > -1;
      });
    
    } else {
      setTimeout(()=> this.brandSelected = false, 5);
    }

  }

  /**
   * Filters models according to model
   * @param {string} model [description]
   */
  filterModel(model:string) {

    if(this.modelSelected === false) {
      this.filteredModelList = this.models.filter(function(element:string) {
        return element.toLowerCase().indexOf(model.toLowerCase()) > -1;
      });
    } else {
      setTimeout(()=> this.modelSelected = false, 5);
    }
    
  }

  /**
   * Filters out calibers according to the current input
   * @param caliber 
   */
  filterCaliber(caliber:string) {
    
    if(this.caliberSelected === false) {
      this.filteredCaliberList = this.calibers.filter(function(element:string) {
        return element.toLowerCase().indexOf(caliber.toLowerCase()) > -1;
      });
    } else {
      setTimeout(()=> this.caliberSelected = false, 5);
    }
  }

  /**
   * Submit a watch
   */
  onSubmit() {

    this.submitAttempt = true;

    if (this.watchForm.valid) {
      this.error = false;
    
      this.twapi.upsertWatch(this.watchModel).then(
        res => {
          this.user.upsertWatch(res);
          this.watchSaved.emit(this.user);
          this.submitAttempt = false;
          this.error = false;
        },
        error => {
          this.error = true;
          this.submitAttempt = false;
        }
      );
    } else {
      this.error = true;
    }
  }

  /**
   * Delete a watch
   */
  onDelete() {
    this.submitAttempt = true;
    this.twapi.deleteWatch(this.user, this.watchModel).then(
      res => {
        this.watchSaved.emit(res);
        this.submitAttempt = false;
      },
      error => {
        this.error = true;
        this.submitAttempt = false;
      }
    );
  }
}

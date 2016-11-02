import { Component, EventEmitter, Output, OnInit } from '@angular/core';

import {TranslateService} from 'ng2-translate/ng2-translate';

import { Watch } from './../../models/watch.model';
import { User } from './../../models/user.model';
import {TwAPIService} from './../../services/twapi.service';
import { GAService } from './../../services/ga.service';

import {   
  FormBuilder,  
  FormGroup,
  Validators
} from '@angular/forms';

@Component({
  selector: 'watch-form',
  template: ''
})
/**
 * From to add, delete and update watches
 */
export class WatchComponent implements OnInit {

  user: User;
  @Output() watchSaved = new EventEmitter();
  watchModel: Watch = new Watch(null, "");
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
    private formBuilder    : FormBuilder,
  ) {


    translate.setDefaultLang('en');
    translate.use('en');

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
    this.watchModel.brand = brand;
  }

  /**
   * Select a model
   * @param {string} model [description]
   */
  selectModel(model: string) {
    this.filteredModelList = [];
    this.watchModel.name = model;
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
    this.initForm();
  }

  initForm(){
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
  }

  /**
   * Submit a watch
   */
  onSubmit(){
    this.submitAttempt = true;

    if (this.watchForm.valid) {

      this.twapi.upsertWatch(this.watchModel).then(
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
    this.twapi.deleteWatch(this.user, this.watchModel).then(
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
}

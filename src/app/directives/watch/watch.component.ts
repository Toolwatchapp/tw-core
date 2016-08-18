import { Component, Input, EventEmitter, Output, OnInit } from '@angular/core';
import {FORM_DIRECTIVES, FormBuilder, Control, ControlGroup, Validators}  from '@angular/common';
import {TRANSLATE_PROVIDERS, TranslateService, TranslatePipe, TranslateLoader, TranslateStaticLoader} from 'ng2-translate/ng2-translate';
import { Watch } from './../../models/watch.model';
import { User } from './../../models/user.model';
import {TwAPIService} from './../../services/twapi.service';
import {Http, HTTP_PROVIDERS, Headers}  from '@angular/http';
import { GAService } from './../../services/ga.service';
import { Wove } from 'aspect.js/dist/lib/aspect';
import { LoggerAspect } from './../../aspects/logger.aspect';

@Wove(LoggerAspect)
@Component({
  selector: 'watch-form',
  templateUrl: 'base/dist/app/directives/watch/watch.component.html',
  // styleUrls: ['app/directives/watch/watch.component.css'],
  pipes: [TranslatePipe],
  providers: [TwAPIService, HTTP_PROVIDERS],
  directives: [FORM_DIRECTIVES]
})
/**
 * From to add, delete and update watches
 */
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
    Validators.minLength(4)]
  ));
  serial: Control = new Control();
  brands: { name: string, icon: string, models: string }[] = [];
  models: string[] = [];
  filteredBrandList: { name: string, icon: string, models: string }[] = [];
  filteredModelList: string[] = [];
  error:boolean = false;
  submitAttempt:boolean = false;

  /**
   * Constructor with DI
   * @param {TranslateService} private translate [description]
   * @param {TwAPIService}     private twapi     [description]
   * @param {FormBuilder}      private builder   [description]
   */
  constructor(protected translate: TranslateService,
    private twapi: TwAPIService, private builder: FormBuilder) {

    translate.setDefaultLang('en');
    translate.use('en');

    //Construct form
    this.watchForm = builder.group({
      brand: this.brand,
      model: this.model,
      caliber: this.caliber,
      year: this.year,
      serial: this.serial
    });

    //Create an empty watch if none was passed
    if(this.watchModel === undefined){
      this.watchModel = new Watch(null, null);
    }
  }

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

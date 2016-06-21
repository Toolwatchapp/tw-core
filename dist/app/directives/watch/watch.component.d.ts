import { EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, Control, ControlGroup } from '@angular/common';
import { TranslateService } from 'ng2-translate/ng2-translate';
import { Watch } from './../../models/watch.model';
import { User } from './../../models/user.model';
import { TwAPIService } from './../../services/twapi.service';
export declare class WatchComponent implements OnInit {
    private translate;
    private twapi;
    private builder;
    watchModel: Watch;
    user: User;
    watchSaved: EventEmitter<{}>;
    watchForm: ControlGroup;
    brand: Control;
    model: Control;
    caliber: Control;
    year: Control;
    serial: Control;
    brands: {
        name: string;
        icon: string;
        models: string;
    }[];
    models: string[];
    filteredBrandList: {
        name: string;
        icon: string;
        models: string;
    }[];
    filteredModelList: string[];
    error: boolean;
    submitAttempt: boolean;
    /**
     * Constructor with DI
     * @param {TranslateService} private translate [description]
     * @param {TwAPIService}     private twapi     [description]
     * @param {FormBuilder}      private builder   [description]
     */
    constructor(translate: TranslateService, twapi: TwAPIService, builder: FormBuilder);
    /**
     * [selectBrand description]
     * @param {string} brand [description]
     */
    selectBrand(brand: string): void;
    selectModel(model: string): void;
    filterBrand(brand: string): void;
    filterModel(model: string): void;
    ngOnInit(): void;
    onSubmit(): void;
    onDelete(): void;
}

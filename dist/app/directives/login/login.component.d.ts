import { OnInit, EventEmitter } from '@angular/core';
import { TranslateService } from 'ng2-translate/ng2-translate';
import { FormBuilder, Control, ControlGroup } from '@angular/common';
import { TwAPIService } from './../../services/twapi.service';
export declare class LoginComponent implements OnInit {
    private translate;
    private twapi;
    private builder;
    loginForm: ControlGroup;
    email: Control;
    password: Control;
    submitAttempt: boolean;
    credientials: boolean;
    error: boolean;
    userLogged: EventEmitter<{}>;
    loginAttempt: EventEmitter<{}>;
    loginError: EventEmitter<{}>;
    /**
     * Constructor w/ service injection
     * @param {TranslateService} private translate [description]
     * @param {TwAPIService}     private twapi     [description]
     * @param {FormBuilder}      private builder   [description]
     */
    constructor(translate: TranslateService, twapi: TwAPIService, builder: FormBuilder);
    /**
     * Form submit
     * @param {string}} user [description]
     */
    onSubmit(user: {
        email: string;
        password: string;
    }): void;
    ngOnInit(): void;
}

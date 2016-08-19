import { OnInit, EventEmitter } from '@angular/core';
import { TranslateService } from 'ng2-translate/ng2-translate';
import { TwAPIService } from './../../services/twapi.service';
import { FormBuilder, FormGroup } from '@angular/forms';
export declare class LoginComponent implements OnInit {
    private translate;
    protected twapi: TwAPIService;
    private builder;
    loginForm: FormGroup;
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

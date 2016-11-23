import { OnInit, EventEmitter } from '@angular/core';
import { TranslateService } from 'ng2-translate/ng2-translate';
import { TwAPIService } from './../../services/twapi.service';
import { FormBuilder, FormGroup } from '@angular/forms';
/**
 * Login component. Provides a login form with controlled and
 * emits a User ($event userLogged) on successful login.
 */
export declare class LoginComponent implements OnInit {
    private translate;
    protected twapi: TwAPIService;
    private formBuilder;
    loginForm: FormGroup;
    errors: any[];
    submitAttempt: false;
    userLogged: EventEmitter<{}>;
    loginAttempt: EventEmitter<{}>;
    /**
     * Constructor w/ service injection
     * @param {TranslateService} private translate [description]
     * @param {TwAPIService}     private twapi     [description]
     * @param {FormBuilder}      private builder   [description]
     */
    constructor(translate: TranslateService, twapi: TwAPIService, formBuilder: FormBuilder);
    /**
     * Login an FB user
     * @param {string} fbUser [description]
     */
    onFbSubmit(fbUser: {
        email: string;
        id: string;
        lastname: string;
        firstname: string;
        timezone: string;
        country: string;
    }): void;
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

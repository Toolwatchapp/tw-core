import { OnInit, EventEmitter } from '@angular/core';
import { TranslateService } from 'ng2-translate/ng2-translate';
import { TwAPIService } from './../../services/twapi.service';
import { FormBuilder, FormGroup } from '@angular/forms';
export declare class SignupComponent implements OnInit {
    private translate;
    private twapi;
    private builder;
    signupForm: FormGroup;
    submitAttempt: boolean;
    emailTaken: boolean;
    error: boolean;
    countries: [string];
    filteredList: any[];
    query: string;
    userLogged: EventEmitter<{}>;
    /**
    * Constructor w/ service injection
    * @param {TranslateService} private translate [description]
    * @param {TwAPIService}     private twapi     [description]
    * @param {FormBuilder}      private builder   [description]
    */
    constructor(translate: TranslateService, twapi: TwAPIService, builder: FormBuilder);
    /**
     * Trims the filteredList accoring to the
     * country field
     * @param {string} query [description]
     */
    filter(query: string): void;
    /**
     * Assign the country label when selected
     * from the list
     * @param {string} item [description]
     */
    select(item: string): void;
    /**
     * submit the form
     * @param {string    }} user [description]
     */
    onSubmit(user: {
        email: string;
        password: string;
        emailRepeat: string;
        passwordRepeat: string;
        lastName: string;
        firstName: string;
    }): void;
    ngOnInit(): void;
}

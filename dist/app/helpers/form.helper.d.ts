import { FormBuilder, FormGroup } from '@angular/forms';
export declare class FormHelper {
    /**
     * RC4 Regression. Input takes the form group as
     * default value...
     *
     * @param  {FormBuilder} builder
     * @param  {any}         controlsConfig
     * @return {FormGroup}
     */
    static group(builder: FormBuilder, controlsConfig: any): FormGroup;
}

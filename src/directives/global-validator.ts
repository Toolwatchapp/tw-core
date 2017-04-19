import { FormControl, FormGroup } from '@angular/forms';

export interface ValidationResult {
 [key:string]:boolean;
}

export class GlobalValidator {

    static mailFormat(control: FormControl): ValidationResult {

        var EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;

        if (control.value !== "" && (control.value.length <= 5 || !EMAIL_REGEXP.test(control.value))) {
            return { "incorrectMailFormat": true };
        }

        return null;
    }

    static match(group:FormGroup, from: string, distant: string): ValidationResult {

        console.log(group);

        if (group && group.controls[from].value !== group.controls[from].value) {
            return { "noMatch": true };
        }

        return null;
    }
}
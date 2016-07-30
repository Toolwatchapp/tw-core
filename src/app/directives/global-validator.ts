import { Control, ControlGroup } from '@angular/common';
import { Wove } from 'aspect.js/dist/lib/aspect';
import { LoggerAspect } from './../aspects/logger.aspect';

@Wove(LoggerAspect)
export class GlobalValidator {

	static mailFormat(control: Control): ValidationResult {

        var EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;

        if (control.value != "" && (control.value.length <= 5 || !EMAIL_REGEXP.test(control.value))) {
            return { "incorrectMailFormat": true };
        }

        return null;
    }

    static match(from: string, to: string, returnValue: ValidationResult) {

		return (group: ControlGroup): ValidationResult => {
			let fromGroup = group.controls[from];
			let toGroup = group.controls[to];

			if (fromGroup.value !== toGroup.value) {
				return returnValue;
			}
		}
    }
}

export interface ValidationResult {
    [key: string]: boolean;
}
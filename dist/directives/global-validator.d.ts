import { FormControl, FormGroup } from '@angular/forms';
export interface ValidationResult {
    [key: string]: boolean;
}
export declare class GlobalValidator {
    static mailFormat(control: FormControl): ValidationResult;
    static match(group: FormGroup, from: string, distant: string): ValidationResult;
}

import { Control, ControlGroup } from '@angular/common';
export declare class GlobalValidator {
    static mailFormat(control: Control): ValidationResult;
    static match(from: string, to: string, returnValue: ValidationResult): (group: ControlGroup) => ValidationResult;
}
export interface ValidationResult {
    [key: string]: boolean;
}

import { AbstractControl, ValidationErrors } from '@angular/forms';

export class RegValidators {
    static isStartWithA(control: AbstractControl): ValidationErrors | null {
        if (control.value.charAt(0) == 'a' || control.value.charAt(0) == 'A') {
            return null
        }
        return { isStartWithA: false }
    }
}
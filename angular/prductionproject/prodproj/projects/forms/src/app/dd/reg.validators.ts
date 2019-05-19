import { AbstractControl, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';
import { EventEmitter } from '@angular/core';


export class RegValidators {
    em : EventEmitter<string>

    static isStartWithA(control: AbstractControl): ValidationErrors | null {
        if (control.value.charAt(0) == 'a' || control.value.charAt(0) == 'A') {
            return null
        }
        return { isStartWithA: true }
    }

    static taken(control: AbstractControl): Observable<ValidationErrors | null> {
        return Observable.create(sub => {
            setTimeout(() => {
                if (control.value == 'team@codekul.com') {
                    sub.next({ taken: true })
                    sub.complete()
                } else {
                    sub.next(null)
                    sub.complete()
                }
            }, 1500)
        })
    }
}
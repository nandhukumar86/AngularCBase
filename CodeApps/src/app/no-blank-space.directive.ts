import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[noBlankSpace]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: NoBlankSpaceDirective, multi: true }
  ]
})
export class NoBlankSpaceDirective implements Validator {

  //constructor() { }

  validate(control: AbstractControl): ValidationErrors | null {
    if (control.value && control.value.trim().length < 1) {
      return {
        noBlankSpace: false
      };
    }
    return null;
  }

}

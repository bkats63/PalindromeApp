import { Directive } from '@angular/core';
import { FormControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[validPallindrome]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: PallindromeValidator, multi: true }
  ]
})
export class PallindromeValidator implements Validator {

  constructor() { }

  validate(c: FormControl): ValidationErrors | null {
    return PallindromeValidator.validatePallindrome(c);
  }

  static validatePallindrome(control: FormControl): ValidationErrors {
    if (control.value) {

      var re = /[^A-Za-z0-9]/g;
      let str: string = control.value;
      str = str.toLowerCase().replace(re, '');
      var len = str.length;
      for (var i = 0; i < len / 2; i++) {
        if (str[i] !== str[len - 1 - i])
        {
          return { errorMsg: control.value + ' is not a pallindrome' };
      } 
    }
    return null;
  }



}



}

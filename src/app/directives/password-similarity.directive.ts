import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appPasswordSimilarity]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: PasswordSimilarityDirective,
    multi: true
  }]
})
export class PasswordSimilarityDirective implements Validator {

  @Input('appPasswordSimilarity') passwordFieldName!: string;

  validate(control: AbstractControl): ValidationErrors | null {
    if(!control.parent || !this.passwordFieldName){
      return null
    }

    const passwordFieldControl = control.parent.get(this.passwordFieldName);
    const confirmPasswordControl = control;

    if(!passwordFieldControl || !confirmPasswordControl){
      return null
    }
    return passwordFieldControl.value === confirmPasswordControl.value ? null : {passwordMisMatch: true}
  }

}

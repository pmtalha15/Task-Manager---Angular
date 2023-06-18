import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appClientLocationStatusValidator]',
  providers: [{provide:NG_VALIDATORS, useExisting:ClientLocationStatusValidatorDirective, multi:true}]
})
export class ClientLocationStatusValidatorDirective implements Validator{

  constructor() { }
  validate(control: AbstractControl<any, any>): ValidationErrors | null {

    let isValid = true;
    if(control.value.ClientLocation == 3 && control.value.Status == "Support"){
      isValid = false;
    }

    if(isValid == true){
      return null;
    }else{
      return {cilentLocationStatus:{valid:false}};
    }
  }

}

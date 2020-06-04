import { ValidatorFn, AbstractControl } from '@angular/forms';

// Esta es la función validadora (le llega un control y dice si es válido)
const myValidatorFn: ValidatorFn = (control: AbstractControl) => {
  let validationErrorObject = {
    spanishIban: true
  };

  const value = control.value;
  if (value && value[0] === 'E' && value[1] === 'S') {
      validationErrorObject = null;
  }

  return validationErrorObject;
};

// Este es el validador, lo único que hace es un return de una función validadora
export function spanishIbanValidator(): ValidatorFn {
  return myValidatorFn;
}

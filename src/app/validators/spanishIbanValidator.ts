import { ValidatorFn, AbstractControl } from '@angular/forms';

// Esta es la función validadora
let myValidator: ValidatorFn = (control: AbstractControl) => {
  let value = control.value;

  if(value && value[0] === 'E' && value[1] === 'S') {
    return null;
  } else {
    return { 'ibanValidator': true }
  }
};

// Este es el Validator
export function spanishIbanValidator() {
  return myValidator;
}

// Este es el Validator
export function countriesIbanValidator(countriesList: string[]) {

  // Esta es la función validadora
  let myValidator2: ValidatorFn = (control: AbstractControl) => {
    let value = control.value;
    const country = value.substring(0, 2); // 2 letras del país introducido por el usuario
  
    if(countriesList.includes(country)) {    //  ['ES', 'FR', 'PO'].includes('ES')
      return null;
    } else {
      return { 'ibanValidator': true }
    }
  };

  return myValidator2;
}




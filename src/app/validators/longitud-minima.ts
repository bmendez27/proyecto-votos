import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

// Parametrizable: recibe la longitud mínima y devuelve el validador
export function longitudMinima(min: number): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const valor = (control.value ?? '').toString().trim();
    if (!valor) {
      return null; // de lo vacío se encarga Validators.required
    }
    return valor.length >= min
      ? null
      : { longitudMinima: { requerida: min, actual: valor.length } };
  };
}
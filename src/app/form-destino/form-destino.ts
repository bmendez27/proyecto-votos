import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Destino } from '../models/destino.model';
import { longitudMinima } from '../validators/longitud-minima';

@Component({
  selector: 'app-form-destino',
  templateUrl: './form-destino.html',
  styleUrl: './form-destino.css',
  standalone: false,
})
export class FormDestino {
  @Output() destinoAgregado = new EventEmitter<Destino>();

  form: FormGroup;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      nombre: ['', [Validators.required, longitudMinima(3)]],
      pais: ['', Validators.required],
    });
  }

  get nombre() {
    return this.form.get('nombre');
  }

  get pais() {
    return this.form.get('pais');
  }

  guardar(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched(); // para que se muestren los errores
      return;
    }

    const { nombre, pais } = this.form.value;
    this.destinoAgregado.emit({
      id: Date.now(),
      nombre: nombre.trim(),
      pais: pais.trim(),
      votos: 0,
    });
    this.form.reset();
  }
}
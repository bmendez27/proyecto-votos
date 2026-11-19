import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Destino } from '../models/destino.model';
import { AppState } from '../store/destinos.reducer';
import {
  agregarDestino,
  borrarDestino,
  votarAFavor,
  votarEnContra,
} from '../store/destinos.actions';

@Component({
  selector: 'app-destinos',
  templateUrl: './destinos.html',
  styleUrl: './destinos.css',
  standalone: false,
})
export class Destinos {
  destinos$: Observable<Destino[]>;

  constructor(private store: Store<AppState>) {
    this.destinos$ = this.store.select((state) => state.destinos.items);
  }

  // Recibe el evento emitido por el componente hijo
  onDestinoAgregado(destino: Destino): void {
    this.store.dispatch(agregarDestino({ destino }));
  }

  borrar(id: number): void {
    this.store.dispatch(borrarDestino({ id }));
  }

  votarFavor(id: number): void {
    this.store.dispatch(votarAFavor({ id }));
  }

  votarContra(id: number): void {
    this.store.dispatch(votarEnContra({ id }));
  }
}
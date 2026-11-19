import { createAction, props } from '@ngrx/store';
import { Destino } from '../models/destino.model';

export const agregarDestino = createAction(
  '[Destinos] Agregar',
  props<{ destino: Destino }>()
);

export const borrarDestino = createAction(
  '[Destinos] Borrar',
  props<{ id: number }>()
);

export const votarAFavor = createAction(
  '[Destinos] Votar a favor',
  props<{ id: number }>()
);

export const votarEnContra = createAction(
  '[Destinos] Votar en contra',
  props<{ id: number }>()
);
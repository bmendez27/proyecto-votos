import { createReducer, on } from '@ngrx/store';
import { Destino } from '../models/destino.model';
import {
  agregarDestino,
  borrarDestino,
  votarAFavor,
  votarEnContra,
} from './destinos.actions';

export interface DestinosState {
  items: Destino[];
}

export interface AppState {
  destinos: DestinosState;
}

export const estadoInicial: DestinosState = {
  items: [
    { id: 1, nombre: 'Cartagena', pais: 'Colombia', votos: 0 },
    { id: 2, nombre: 'Machu Picchu', pais: 'Perú', votos: 0 },
  ],
};

export const destinosReducer = createReducer(
  estadoInicial,

  // Agregar: devuelve un arreglo NUEVO, nunca modifica el anterior
  on(agregarDestino, (state, { destino }) => ({
    ...state,
    items: [...state.items, destino],
  })),

  // Borrar: filter devuelve un arreglo nuevo sin el elemento
  on(borrarDestino, (state, { id }) => ({
    ...state,
    items: state.items.filter((d) => d.id !== id),
  })),

  // Votos: cada elemento tiene su propio contador
  on(votarAFavor, (state, { id }) => ({
    ...state,
    items: state.items.map((d) =>
      d.id === id ? { ...d, votos: d.votos + 1 } : d
    ),
  })),

  on(votarEnContra, (state, { id }) => ({
    ...state,
    items: state.items.map((d) =>
      d.id === id ? { ...d, votos: d.votos - 1 } : d
    ),
  }))
);
import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Destinos } from './destinos/destinos';
import { FormDestino } from './form-destino/form-destino';
import { destinosReducer } from './store/destinos.reducer';

@NgModule({
  declarations: [App, Destinos, FormDestino],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ destinos: destinosReducer }),
  ],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
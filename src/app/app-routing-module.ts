import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Destinos } from './destinos/destinos';

const routes: Routes = [
  { path: '', redirectTo: 'destinos', pathMatch: 'full' }, // path con redirect
  { path: 'destinos', component: Destinos },               // path con component
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
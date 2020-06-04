import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Ejercicio7Page } from './ejercicio7.page';

const routes: Routes = [
  {
    path: '',
    component: Ejercicio7Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Ejercicio7PageRoutingModule {}

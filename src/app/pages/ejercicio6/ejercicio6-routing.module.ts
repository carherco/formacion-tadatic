import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Ejercicio6Page } from './ejercicio6.page';

const routes: Routes = [
  {
    path: '',
    component: Ejercicio6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Ejercicio6PageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormReactivePage } from './form-reactive.page';

const routes: Routes = [
  {
    path: '',
    component: FormReactivePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormReactivePageRoutingModule {}

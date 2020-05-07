import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ObservablesSearchPage } from './observables-search.page';

const routes: Routes = [
  {
    path: '',
    component: ObservablesSearchPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ObservablesSearchPageRoutingModule {}

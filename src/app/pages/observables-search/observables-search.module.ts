import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';


import { IonicModule } from '@ionic/angular';

import { ObservablesSearchPageRoutingModule } from './observables-search-routing.module';

import { ObservablesSearchPage } from './observables-search.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    ObservablesSearchPageRoutingModule
  ],
  declarations: [ObservablesSearchPage]
})
export class ObservablesSearchPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormReactivePageRoutingModule } from './form-reactive-routing.module';

import { FormReactivePage } from './form-reactive.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    FormReactivePageRoutingModule
  ],
  declarations: [FormReactivePage]
})
export class FormReactivePageModule {}

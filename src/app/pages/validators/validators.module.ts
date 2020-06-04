import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ValidatorsPageRoutingModule } from './validators-routing.module';

import { ValidatorsPage } from './validators.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ValidatorsPageRoutingModule
  ],
  declarations: [ValidatorsPage]
})
export class ValidatorsPageModule {}

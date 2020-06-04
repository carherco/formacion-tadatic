import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Ejercicio6PageRoutingModule } from './ejercicio6-routing.module';

import { Ejercicio6Page } from './ejercicio6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ejercicio6PageRoutingModule
  ],
  declarations: [Ejercicio6Page]
})
export class Ejercicio6PageModule {}

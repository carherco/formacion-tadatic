import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Ejercicio7PageRoutingModule } from './ejercicio7-routing.module';

import { Ejercicio7Page } from './ejercicio7.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ejercicio7PageRoutingModule
  ],
  declarations: [Ejercicio7Page]
})
export class Ejercicio7PageModule {}

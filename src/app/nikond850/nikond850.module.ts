import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Nikond850PageRoutingModule } from './nikond850-routing.module';

import { Nikond850Page } from './nikond850.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Nikond850PageRoutingModule
  ],
  declarations: [Nikond850Page]
})
export class Nikond850PageModule {}

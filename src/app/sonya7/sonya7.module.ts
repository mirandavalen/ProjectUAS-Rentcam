import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Sonya7PageRoutingModule } from './sonya7-routing.module';

import { Sonya7Page } from './sonya7.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Sonya7PageRoutingModule
  ],
  declarations: [Sonya7Page]
})
export class Sonya7PageModule {}

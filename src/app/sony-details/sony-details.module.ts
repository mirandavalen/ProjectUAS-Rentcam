import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SonyDetailsPageRoutingModule } from './sony-details-routing.module';

import { SonyDetailsPage } from './sony-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SonyDetailsPageRoutingModule
  ],
  declarations: [SonyDetailsPage]
})
export class SonyDetailsPageModule {}

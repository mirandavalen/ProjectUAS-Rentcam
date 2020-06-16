import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CanonPageRoutingModule } from './canon-routing.module';

import { CanonPage } from './canon.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CanonPageRoutingModule
  ],
  declarations: [CanonPage]
})
export class CanonPageModule {}

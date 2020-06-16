import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MhsPageRoutingModule } from './mhs-routing.module';

import { MhsPage } from './mhs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MhsPageRoutingModule
  ],
  declarations: [MhsPage]
})
export class MhsPageModule {}

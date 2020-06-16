import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Canon6000dPageRoutingModule } from './canon6000d-routing.module';

import { Canon6000dPage } from './canon6000d.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Canon6000dPageRoutingModule
  ],
  declarations: [Canon6000dPage]
})
export class Canon6000dPageModule {}

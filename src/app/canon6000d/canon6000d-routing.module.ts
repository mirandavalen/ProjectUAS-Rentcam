import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Canon6000dPage } from './canon6000d.page';

const routes: Routes = [
  {
    path: '',
    component: Canon6000dPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Canon6000dPageRoutingModule {}

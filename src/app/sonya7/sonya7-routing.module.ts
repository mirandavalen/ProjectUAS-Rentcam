import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Sonya7Page } from './sonya7.page';

const routes: Routes = [
  {
    path: '',
    component: Sonya7Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Sonya7PageRoutingModule {}

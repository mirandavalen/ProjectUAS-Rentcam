import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Nikond850Page } from './nikond850.page';

const routes: Routes = [
  {
    path: '',
    component: Nikond850Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Nikond850PageRoutingModule {}

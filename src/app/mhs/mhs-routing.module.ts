import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MhsPage } from './mhs.page';

const routes: Routes = [
  {
    path: '',
    component: MhsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MhsPageRoutingModule {}

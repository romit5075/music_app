import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewAllPage } from './view-all.page';

const routes: Routes = [
  {
    path: '',
    component: ViewAllPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewAllPageRoutingModule {}

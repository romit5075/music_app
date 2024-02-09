import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MylibraryPage } from './mylibrary.page';

const routes: Routes = [
  {
    path: '',
    component: MylibraryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MylibraryPageRoutingModule {}

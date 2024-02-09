import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ViewAllPageRoutingModule } from './view-all-routing.module';
import { ViewAllPage } from './view-all.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewAllPageRoutingModule
  ],
  declarations: [ViewAllPage]
})
export class ViewAllPageModule {}

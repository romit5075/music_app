import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProPageRoutingModule } from './pro-routing.module';

import { ProPage } from './pro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProPageRoutingModule
  ],
  declarations: [ProPage]
})
export class ProPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MylibraryPageRoutingModule } from './mylibrary-routing.module';

import { MylibraryPage } from './mylibrary.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MylibraryPageRoutingModule
  ],
  declarations: [MylibraryPage]
})
export class MylibraryPageModule {}

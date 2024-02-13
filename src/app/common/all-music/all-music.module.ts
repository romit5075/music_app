import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AllMusicPage } from './all-music.page';
import { RouterModule } from '@angular/router';
import { MusicPage } from '../music/music.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(
      [
        {
          path: '',
          component: AllMusicPage
        },
        {
          path: 'home/music/:id',
          component: MusicPage
        },
        { path: '**', redirectTo: 'home' }
      ]
    )
  ],
  declarations: [AllMusicPage]
})
export class AllMusicPageModule { }

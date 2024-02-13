import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'viewall',
    loadChildren: () => import('./view-all/view-all.module').then(m => m.ViewAllPageModule)
  },
  {
    path: 'allMusic/:id',
    loadChildren: () => import('../common/all-music/all-music.module').then(m => m.AllMusicPageModule)
  },
  {
    path: 'music/:id',
    loadChildren: () => import('../common/music/music.module').then(m => m.MusicPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule { }

import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs/tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home',
      },
      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'search',
        loadChildren: () => import('./search/search.module').then(m => m.SearchPageModule)
      },
      {
        path: 'foryou',
        loadChildren: () => import('./foryou/foryou.module').then(m => m.ForyouPageModule)
      },
      {
        path: 'mylibrary',
        loadChildren: () => import('./mylibrary/mylibrary.module').then(m => m.MylibraryPageModule)
      },
      {
        path: 'pro',
        loadChildren: () => import('./pro/pro.module').then(m => m.ProPageModule)
      },
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: 'all-music',
    loadChildren: () => import('./common/all-music/all-music.module').then( m => m.AllMusicPageModule)
  },
  {
    path: 'music',
    loadChildren: () => import('./common/music/music.module').then( m => m.MusicPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

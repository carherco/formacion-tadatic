import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'observables',
    loadChildren: () => import('./pages/observables/observables.module').then( m => m.ObservablesPageModule)
  },
  {
    path: 'observables-search',
    loadChildren: () => import('./pages/observables-search/observables-search.module').then( m => m.ObservablesSearchPageModule)
  },
  {
    path: 'ejercicio1',
    loadChildren: () => import('./pages/ejercicio1/ejercicio1.module').then( m => m.Ejercicio1PageModule)
  },
  {
    path: 'ejercicio2',
    loadChildren: () => import('./pages/ejercicio2/ejercicio2.module').then( m => m.Ejercicio2PageModule)
  },
  {
    path: 'ejercicio3',
    loadChildren: () => import('./pages/ejercicio3/ejercicio3.module').then( m => m.Ejercicio3PageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

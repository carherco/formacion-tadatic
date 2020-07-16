import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'workspace',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
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
  },
  {
    path: 'ejercicio4',
    loadChildren: () => import('./pages/ejercicio4/ejercicio4.module').then( m => m.Ejercicio4PageModule)
  },
  {
    path: 'form-reactive',
    loadChildren: () => import('./pages/form-reactive/form-reactive.module').then( m => m.FormReactivePageModule)
  },
  {
    path: 'catalog',
    loadChildren: () => import('./pages/catalog/catalog.module').then( m => m.CatalogPageModule)
  },
  {
    path: 'card',
    loadChildren: () => import('./pages/card/card.module').then( m => m.CardPageModule)
  },
  {
    path: 'popover',
    loadChildren: () => import('./pages/popover/popover.module').then( m => m.PopoverPageModule)
  },
  {
    path: 'validators',
    loadChildren: () => import('./pages/validators/validators.module').then( m => m.ValidatorsPageModule)
  },
  {
    path: 'ejercicio5',
    loadChildren: () => import('./pages/ejercicio5/ejercicio5.module').then( m => m.Ejercicio5PageModule)
  },
  {
    path: 'ejercicio6',
    loadChildren: () => import('./pages/ejercicio6/ejercicio6.module').then( m => m.Ejercicio6PageModule)
  },
  {
    path: 'ejercicio7',
    loadChildren: () => import('./pages/ejercicio7/ejercicio7.module').then( m => m.Ejercicio7PageModule)
  },
  {
    path: 'indexed-db',
    loadChildren: () => import('./pages/indexed-db/indexed-db.module').then( m => m.IndexedDBPageModule)
  },
  {
    path: 'arrays',
    loadChildren: () => import('./pages/arrays/arrays.module').then( m => m.ArraysPageModule)
  },
  {
    path: 'edit-profile',
    loadChildren: () => import('./pages/edit-profile/edit-profile.module').then( m => m.EditProfilePageModule)
  },
  {
    path: 'workspace',
    loadChildren: () => import('./pages/workspace/workspace.module').then( m => m.WorkspacePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

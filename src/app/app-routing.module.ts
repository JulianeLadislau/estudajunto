import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { DuvidaPage } from './duvida/duvida.page';
import { RespostaPage } from './resposta/resposta.page';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'duvida',
    loadChildren: () => import('./duvida/duvida.module').then( m => m.DuvidaPageModule)
  },
  {
    path: 'resposta',
    loadChildren: () => import('./resposta/resposta.module').then( m => m.RespostaPageModule)
  },
  {
    path: 'tema',
    loadChildren: () => import('./tema/tema.module').then( m => m.TemaPageModule)
  },
  {
    path: 'exibir',
    loadChildren: () => import('./exibir/exibir.module').then( m => m.ExibirPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

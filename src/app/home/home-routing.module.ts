import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { DuvidaPage } from '../duvida/duvida.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  }, 
  {
    path: '',
    component: DuvidaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}

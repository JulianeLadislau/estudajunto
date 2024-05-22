import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DuvidaPage } from './duvida.page';

const routes: Routes = [
  {
    path: '',
    component: DuvidaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DuvidaPageRoutingModule {}

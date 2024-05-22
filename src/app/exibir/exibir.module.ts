import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExibirPageRoutingModule } from './exibir-routing.module';

import { ExibirPage } from './exibir.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExibirPageRoutingModule
  ],
  declarations: [ExibirPage]
})
export class ExibirPageModule {}

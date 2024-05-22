import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RespostaPageRoutingModule } from './resposta-routing.module';

import { RespostaPage } from './resposta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RespostaPageRoutingModule
  ],
  declarations: [RespostaPage]
})
export class RespostaPageModule {}

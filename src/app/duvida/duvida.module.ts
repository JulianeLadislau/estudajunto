import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DuvidaPageRoutingModule } from './duvida-routing.module';

import { DuvidaPage } from './duvida.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DuvidaPageRoutingModule
  ],
  declarations: [DuvidaPage]
})
export class DuvidaPageModule {}

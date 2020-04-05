import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ParamModalPageRoutingModule } from './param-modal-routing.module';

import { ParamModalPage } from './param-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ParamModalPageRoutingModule
  ],
  declarations: [ParamModalPage]
})
export class ParamModalPageModule {}

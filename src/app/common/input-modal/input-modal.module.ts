import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InputModalPageRoutingModule } from './input-modal-routing.module';

import { InputModalPage } from './input-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InputModalPageRoutingModule
  ],
  declarations: [InputModalPage]
})
export class InputModalPageModule {}

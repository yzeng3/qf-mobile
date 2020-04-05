import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ColorModalPageRoutingModule } from './color-modal-routing.module';

import { ColorModalPage } from './color-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ColorModalPageRoutingModule
  ],
  declarations: [ColorModalPage]
})
export class ColorModalPageModule {}

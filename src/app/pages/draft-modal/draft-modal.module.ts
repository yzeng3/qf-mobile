import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DraftModalPageRoutingModule } from './draft-modal-routing.module';

import { DraftModalPage } from './draft-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DraftModalPageRoutingModule
  ],
  declarations: [DraftModalPage]
})
export class DraftModalPageModule {}

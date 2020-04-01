import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScoreModalPageRoutingModule } from './score-modal-routing.module';

import { ScoreModalPage } from './score-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScoreModalPageRoutingModule
  ],
  declarations: [ScoreModalPage]
})
export class ScoreModalPageModule {}

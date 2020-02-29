import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModelPageRoutingModule } from './model-routing.module';

import { ModelPage } from './model.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModelPageRoutingModule
  ],
  declarations: [ModelPage]
})
export class ModelPageModule {}

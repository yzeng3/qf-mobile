import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StoreModelPageRoutingModule } from './store-model-routing.module';

import { StoreModelPage } from './store-model.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StoreModelPageRoutingModule
  ],
  declarations: [StoreModelPage]
})
export class StoreModelPageModule {}

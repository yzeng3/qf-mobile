import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StoreDesignPageRoutingModule } from './store-design-routing.module';

import { StoreDesignPage } from './store-design.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StoreDesignPageRoutingModule
  ],
  declarations: [StoreDesignPage]
})
export class StoreDesignPageModule {}

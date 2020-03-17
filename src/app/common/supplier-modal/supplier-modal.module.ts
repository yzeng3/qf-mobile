import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SupplierModalPageRoutingModule } from './supplier-modal-routing.module';

import { SupplierModalPage } from './supplier-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SupplierModalPageRoutingModule
  ],
  declarations: [SupplierModalPage]
})
export class SupplierModalPageModule {}

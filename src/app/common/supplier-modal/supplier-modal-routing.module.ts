import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SupplierModalPage } from './supplier-modal.page';

const routes: Routes = [
  {
    path: '',
    component: SupplierModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SupplierModalPageRoutingModule {}

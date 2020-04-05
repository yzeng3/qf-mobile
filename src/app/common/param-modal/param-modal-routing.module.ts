import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ParamModalPage } from './param-modal.page';

const routes: Routes = [
  {
    path: '',
    component: ParamModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ParamModalPageRoutingModule {}

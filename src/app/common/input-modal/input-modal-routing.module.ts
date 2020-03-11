import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InputModalPage } from './input-modal.page';

const routes: Routes = [
  {
    path: '',
    component: InputModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InputModalPageRoutingModule {}

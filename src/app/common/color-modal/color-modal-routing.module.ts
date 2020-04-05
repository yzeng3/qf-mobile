import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ColorModalPage } from './color-modal.page';

const routes: Routes = [
  {
    path: '',
    component: ColorModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ColorModalPageRoutingModule {}

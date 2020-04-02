import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StoreModelPage } from './store-model.page';

const routes: Routes = [
  {
    path: '',
    component: StoreModelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StoreModelPageRoutingModule {}

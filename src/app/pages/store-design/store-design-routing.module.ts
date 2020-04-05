import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StoreDesignPage } from './store-design.page';

const routes: Routes = [
  {
    path: '',
    component: StoreDesignPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StoreDesignPageRoutingModule {}

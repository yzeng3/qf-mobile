import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FactoryPage } from './factory.page';

const routes: Routes = [
  {
    path: '',
    component: FactoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FactoryPageRoutingModule {}

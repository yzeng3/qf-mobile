import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MoreDesignPage } from './more-design.page';

const routes: Routes = [
  {
    path: '',
    component: MoreDesignPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoreDesignPageRoutingModule {}

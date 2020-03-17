import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DraftModalPage } from './draft-modal.page';

const routes: Routes = [
  {
    path: '',
    component: DraftModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DraftModalPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScoreModalPage } from './score-modal.page';

const routes: Routes = [
  {
    path: '',
    component: ScoreModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScoreModalPageRoutingModule {}

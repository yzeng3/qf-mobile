import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReleasedTaskPage } from './released-task.page';

const routes: Routes = [
  {
    path: '',
    component: ReleasedTaskPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReleasedTaskPageRoutingModule {}

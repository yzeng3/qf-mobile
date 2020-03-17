import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AcceptedTaskPage } from './accepted-task.page';

const routes: Routes = [
  {
    path: '',
    component: AcceptedTaskPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AcceptedTaskPageRoutingModule {}

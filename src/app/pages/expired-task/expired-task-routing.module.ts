import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExpiredTaskPage } from './expired-task.page';

const routes: Routes = [
  {
    path: '',
    component: ExpiredTaskPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExpiredTaskPageRoutingModule {}

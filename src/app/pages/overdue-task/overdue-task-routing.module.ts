import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OverdueTaskPage } from './overdue-task.page';

const routes: Routes = [
  {
    path: '',
    component: OverdueTaskPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OverdueTaskPageRoutingModule {}

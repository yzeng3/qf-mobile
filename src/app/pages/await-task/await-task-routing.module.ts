import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AwaitTaskPage } from './await-task.page';

const routes: Routes = [
  {
    path: '',
    component: AwaitTaskPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AwaitTaskPageRoutingModule {}

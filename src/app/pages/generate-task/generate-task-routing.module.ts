import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GenerateTaskPage } from './generate-task.page';

const routes: Routes = [
  {
    path: '',
    component: GenerateTaskPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GenerateTaskPageRoutingModule {}

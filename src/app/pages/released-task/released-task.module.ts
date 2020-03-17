import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReleasedTaskPageRoutingModule } from './released-task-routing.module';

import { ReleasedTaskPage } from './released-task.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReleasedTaskPageRoutingModule
  ],
  declarations: [ReleasedTaskPage]
})
export class ReleasedTaskPageModule {}

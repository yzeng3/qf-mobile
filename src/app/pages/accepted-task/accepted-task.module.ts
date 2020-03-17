import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AcceptedTaskPageRoutingModule } from './accepted-task-routing.module';

import { AcceptedTaskPage } from './accepted-task.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AcceptedTaskPageRoutingModule
  ],
  declarations: [AcceptedTaskPage]
})
export class AcceptedTaskPageModule {}

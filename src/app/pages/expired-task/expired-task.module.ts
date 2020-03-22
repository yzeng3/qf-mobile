import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExpiredTaskPageRoutingModule } from './expired-task-routing.module';

import { ExpiredTaskPage } from './expired-task.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExpiredTaskPageRoutingModule
  ],
  declarations: [ExpiredTaskPage]
})
export class ExpiredTaskPageModule {}

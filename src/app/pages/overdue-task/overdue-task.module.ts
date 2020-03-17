import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OverdueTaskPageRoutingModule } from './overdue-task-routing.module';

import { OverdueTaskPage } from './overdue-task.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OverdueTaskPageRoutingModule
  ],
  declarations: [OverdueTaskPage]
})
export class OverdueTaskPageModule {}

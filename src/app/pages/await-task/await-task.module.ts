import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AwaitTaskPageRoutingModule } from './await-task-routing.module';

import { AwaitTaskPage } from './await-task.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AwaitTaskPageRoutingModule
  ],
  declarations: [AwaitTaskPage]
})
export class AwaitTaskPageModule {}

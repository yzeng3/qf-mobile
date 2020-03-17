import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GenerateTaskPageRoutingModule } from './generate-task-routing.module';

import { GenerateTaskPage } from './generate-task.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GenerateTaskPageRoutingModule
  ],
  declarations: [GenerateTaskPage]
})
export class GenerateTaskPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FactoryPageRoutingModule } from './factory-routing.module';

import { FactoryPage } from './factory.page';
import { MapDragDirective } from 'src/app/directive/map-drag.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FactoryPageRoutingModule
  ],
  declarations: [FactoryPage, MapDragDirective]
})
export class FactoryPageModule { }

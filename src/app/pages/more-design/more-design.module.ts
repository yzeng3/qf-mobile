import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MoreDesignPageRoutingModule } from './more-design-routing.module';

import { MoreDesignPage } from './more-design.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MoreDesignPageRoutingModule
  ],
  declarations: [MoreDesignPage]
})
export class MoreDesignPageModule {}

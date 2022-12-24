import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MinMaxPageRoutingModule } from './min-max-routing.module';

import { MinMaxPage } from './min-max.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MinMaxPageRoutingModule
  ],
  declarations: [MinMaxPage]
})
export class MinMaxPageModule {}

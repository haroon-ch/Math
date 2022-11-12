import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Test2PageRoutingModule } from './test2-routing.module';

import { Test2Page } from './test2.page';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Test2PageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [Test2Page]
})
export class Test2PageModule {}

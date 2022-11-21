import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrinterPageRoutingModule } from './printer-routing.module';

import { PrinterPage } from './printer.page';
import {NgxPrintModule} from 'ngx-print';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrinterPageRoutingModule,
    NgxPrintModule
  ],
  declarations: [PrinterPage]
})
export class PrinterPageModule {}

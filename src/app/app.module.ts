import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { File } from '@ionic-native/file/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';

import { SwiperModule } from 'swiper/angular';
import { NgxPrintModule } from 'ngx-print';



// Import plugin//
// import { ImagePicker } from '@ionic-native/image-picker/ngx';





@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
     IonicModule.forRoot(),
      AppRoutingModule,
      HttpClientModule,
      SwiperModule,
      NgxPrintModule,
      HttpClientModule
  ],
  providers: [
    FileOpener,
    File,
    // ImagePicker
    { 
    provide: RouteReuseStrategy, 
    useClass: IonicRouteStrategy}],
  bootstrap: [AppComponent],
})
export class AppModule {}

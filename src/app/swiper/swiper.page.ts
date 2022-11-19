import { Component, OnInit, ViewChild } from '@angular/core';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y , SwiperOptions , Virtual } from 'swiper';
import { SwiperComponent } from 'swiper/angular';

SwiperCore.use([Virtual]);
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);



@Component({
  selector: 'app-swiper',
  templateUrl: './swiper.page.html',
  styleUrls: ['./swiper.page.scss'],
})
export class SwiperPage implements OnInit {

  @ViewChild('swiper', { static: false }) swiper?: SwiperComponent;

  constructor() { }

  ngOnInit() {
  }

  Config : SwiperOptions = {
    scrollbar: { draggable: false },
  }

 
  
  slideNext(){
    this.swiper.swiperRef.slideNext(100);
  }
  slidePrev(){
    this.swiper.swiperRef.slidePrev(100);
  }

}

import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';
import { Share } from '@capacitor/share';

@Component({
  selector: 'app-share',
  templateUrl: './share.page.html',
  styleUrls: ['./share.page.scss'],
})
export class SharePage implements OnInit {


  constructor() {}

  ngOnInit() {}


    
  async sharesocial(){
    await Share.share({
      title: 'Monthly Installment',
      text: 'Really awesome thing you need to see right mow',
      url: 'http://ionicframework.com/',
      dialogTitle: 'Share with buddies',
    });
  }



}

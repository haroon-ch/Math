import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { ModalController } from '@ionic/angular';
import { ApicallService } from '../services/apicall.service';
import { GlobalService } from '../services/global.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {
 @Input() userdata:any;

  public photo:any={id:'',name:'',email:'',image:''}

  constructor( public modalController: ModalController,private router: Router , public apiCall: ApicallService, public global: GlobalService) { }

  ngOnInit() {
    // console.log(this.userdata);
    // this.photo = this.userdata;
  }

  // public async addNewToGallery() {
  //   const img = await Camera.getPhoto({
  //     quality: 90,
  //     resultType: CameraResultType.Base64,
  //     source: CameraSource.Camera
  //   });
  //   document.getElementById('cameraImage').setAttribute('src', `data:image/${img.format};base64,`+img.base64String );
  //   console.log(img.base64String);
  //   this.photo.image = img.base64String;  
  // }

  // PhotoData(){
  //   console.log(this.photo)
  //   this.apiCall.api_updateprofile(this.photo)
  //   this.close();
  // }

  // close() {
  //   this.modalController.dismiss({
  //     'dismissed': true
  //   });
  // }
//data

  

}

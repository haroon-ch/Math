import { Component, Input, OnInit } from '@angular/core';
import { ApicallService } from '../services/apicall.service';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Component({
  selector: 'app-test',
  templateUrl: './test.page.html',
  styleUrls: ['./test.page.scss'],
})
export class TestPage implements OnInit {


  
  public photo:any={id:'',name:'',email:'',image:''}
  public data:any;



  constructor( public apiCall:ApicallService) { }


  ngOnInit() {
    console.log(this.photo);
    this.data = history.state.data;
    this.photo = this.data;
  }


  async PhotoData(){
    console.log(this.photo)
  await  this.apiCall.api_postProfile(this.photo)

  this.photo = {id:'',name:'',email:'',image:''}
  document.getElementById('cameraImage').setAttribute('src','');
    // await this.apiCall.api_getChecking(this.checkingRecord.id);
  }


  public async addNewToGallery() {
    const img = await Camera.getPhoto({
      quality: 90,
      resultType: CameraResultType.Base64,
      source: CameraSource.Camera
    });
    document.getElementById('cameraImage').setAttribute('src', `data:image/${img.format};base64,`+img.base64String );
    console.log(img.base64String);
    this.photo.image = img.base64String;  
  }

  
  PhotoUpdate(){
    console.log(this.photo);
    this.apiCall.api_updateprofile(this.photo);
    // this.close();
    this.photo = {id:'',name:'',email:'',image:''}
    document.getElementById('cameraImage').setAttribute('src','');
  }


}

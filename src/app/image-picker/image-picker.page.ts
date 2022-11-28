import { Component, OnInit } from '@angular/core';
import { ImagePicker } from '@ionic-native/image-picker/ngx';

@Component({
  selector: 'app-image-picker',
  templateUrl: './image-picker.page.html',
  styleUrls: ['./image-picker.page.scss'],
})
export class ImagePickerPage implements OnInit {

  imgRes: any;
  options: any;
  constructor(private imgPicker: ImagePicker) { }
  
  imagePicker() {
    this.options = {
      width: 200,
      quality: 30,
      outputType: 1
    };
    
    this.imgRes = [];
    this.imgPicker.getPictures(this.options).then((results) => {
      for (var i = 0; i < results.length; i++) {
        this.imgRes.push('data:image/jpeg;base64,' + results[i]);
      }
    }, (error) => {
      alert(error);
    });
  }

  ngOnInit() {
  }

}

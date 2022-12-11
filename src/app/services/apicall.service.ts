import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { GlobalService } from './global.service';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class ApicallService {
  data: any;
 
  constructor( public authservice:AuthService, public global: GlobalService,public router:Router) { }

  async api_postProfile(data: any) {
    await this.authservice.con(data , 'insert_Profile').then((result) => {
       this.data = JSON.parse(String(result));
       if (this.data.error === false) {
        // this.router.navigate(['home'])
        console.log(this.data);
         return;
        } 
         console.log(this.data);
     }, (err) => {
       console.log(err);
     });
   }


   async api_getprofile() {
    await this.authservice.getdata('get_Profile').then((result) => {
        this.data = JSON.parse(String(result));
       console.log(this.data);
        this.global.set_profileInfo(this.data);
      }, (err) => {
        console.log(err);
      });
    }

    async api_updateprofile(data: any) {
      await this.authservice.con(data , 'update_profile').then((result) => {
         this.data = JSON.parse(String(result));
         if (this.data.error === false) {
          console.log(this.data);
           return;
          } 
           console.log(this.data);
       }, (err) => {
         console.log(err);
       });
     }


     async api_deleteprofile(data: any) {
      await this.authservice.con(data , 'delete_Profile').then((result) => {
         this.data = JSON.parse(String(result));
         if (this.data.error === false) {
          // this.toast.deleteDataToast();
          console.log(this.data);
           return;
          } 
           console.log(this.data);
       }, (err) => {
         console.log(err);
       });
     }



}

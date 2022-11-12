import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, NavController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';
import { ApicallService } from '../services/apicall.service';
import { GlobalService } from '../services/global.service';

@Component({
  selector: 'app-get',
  templateUrl: './get.page.html',
  styleUrls: ['./get.page.scss'],
})
export class GetPage implements OnInit {



  public picture:any;


  constructor(public navCtrl : NavController,private modalController: ModalController,  private router: Router , public apiCall: ApicallService, public global: GlobalService) { }

  ngOnInit() {
    this.getprofile();
  }


  async getprofile() {
    await this.apiCall.api_getprofile();
    await this.global.ProfileInfo.subscribe(res => {
       console.log(res)
      this.picture = res;
     });
   }

   async deleteprofile(id) {
    const x = {id:id}
    await this.apiCall.api_deleteprofile(x);
    this.getprofile();
    console.log(id);

  }

  async updateprofile(data) {
    const modal = await this.modalController.create({
      component: ModalPage,
      componentProps:{
        "userdata":data,
      },
      initialBreakpoint: 0.90,
      breakpoints: [0, 0.5, 1]
    });
    return await modal.present();
  }


  PhotoUpdate(item){
    console.log(item)
    // this.apiCall.api_updateprofile(item)
    this.router.navigate(['test'], { state: { data: item } })
    // this.close();
  }

  // close() {
  //   this.modalController.dismiss({
  //     'dismissed': true
  //   });
  // }

}




// function newprofileupdate($u_id, $name, $gender, $address, $phone, $img, $blood, $type, $token)
// {
//     if (isset($img)) {
//         date_default_timezone_set("Asia/Karachi");
//         $time = date("ymd");
//         $id = $time . '_' . microtime(true);
//         $upload_path = "../images/$id.jpg";
//         $upload = substr($upload_path, 3);
//     } else
//         $upload_path = null;
//     $stmt = $this->con->prepare("UPDATE `profile` SET `name`=?,`gender`=?,`address`=? ,`phone`=?,`img`=?,`blood`=?,`type`=?,`token`=?  WHERE `u_id`= ?");
//     $stmt->bind_param("sssssssss", $name, $gender, $address, $phone, $upload, $blood, $type, $token, $u_id);
//     if ($stmt->execute()) {
//         file_put_contents($upload_path, base64_decode($img));
//         return PROFILE_UPDATED;
//     }
//     return PROFILE_NOT_UPDATED;
// }






// indexe
// $app->post('/newprofileupdate', function (Request $request, Response $response) {
//   $requestData = json_decode($request->getBody());
//   $u_id=$requestData->u_id;
//   $name=$requestData->name;
//   $gender=$requestData->gender;
//   $address=$requestData->address;
//   $phone=$requestData->phone;
//   $img=$requestData->img;
//   $blood=$requestData->blood;
//   $type=$requestData->type;
//   $token=$requestData->token;
//   $db = new DbOperation();
//   $result=$db->newprofileupdate($u_id, $name, $gender, $address,$phone, $img, $blood, $type,$token);
//   $responseData=array();

//   if ($result == PROFILE_UPDATED) {
//       $responseData['error'] = false;
//       $responseData['message'] = 'your profile updated';
//       $responseData['profileData'] = $db->getnewprofile($u_id);
//   } elseif ($result == PROFILE_NOT_UPDATED) {
//       $responseData['error'] = true;
//       $responseData['message'] = 'profile not updated';
//   }
// $response->getBody()->write(json_encode($responseData));
// });   
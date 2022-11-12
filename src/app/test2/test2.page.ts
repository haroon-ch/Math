import { Component, OnInit } from '@angular/core';




import { ActionSheetController } from '@ionic/angular';


@Component({
  selector: 'app-test2',
  templateUrl: './test2.page.html',
  styleUrls: ['./test2.page.scss'],
})
export class Test2Page implements OnInit {

  filterTerm: string;
  constructor() { }
  userRecords = [{
      "id": 1,
      "name": "Shazaib Ali",
    },
    {
      "id": 2,
      "name": "M Bilal",
    },
    {
      "id": 3,
      "name": "Zagham Nadeem",
    },
    {
      "id": 4,
      "name": "Rehan Ali",
    },
    {
      "id": 5,
      "name": "Haroon Ali",
    },
    {
      "id": 6,
      "name": "Mr.Sumama",
    },
    {
      "id": 7,
      "name": "Usman Ali",
    },
    {
      "id": 8,
      "name": "Shakeel",
    },
    {
      "id": 9,
      "name": "Abdullah",
    },
    {
      "id": 10,
      "name": "Asad ali",
    }
  ]
 



  ngOnInit() {
    console.log(this.userRecords);
    
  }




  

}

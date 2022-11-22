import { Component, OnInit } from '@angular/core';
import { Clipboard } from '@capacitor/clipboard';

@Component({
  selector: 'app-clipboard',
  templateUrl: './clipboard.page.html',
  styleUrls: ['./clipboard.page.scss'],
})
export class ClipboardPage implements OnInit {

  constructor() { }


  
  ngOnInit() {
  }
  

  writeToClipboard = async () => {
    await Clipboard.write({
      string: "Hello World!"
    });
  };

  
 
    checkClipboard = async () => {
      const { type, value } = await Clipboard.read();
    
      console.log(`Got ${type} from clipboard: ${value}`);
    };
  
}

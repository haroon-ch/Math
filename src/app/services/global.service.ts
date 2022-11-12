import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor() { }

  private profileInfo = new BehaviorSubject<any>('');
  public ProfileInfo = this.profileInfo.asObservable();
  set_profileInfo(profileInfo: any)
  {
    this.profileInfo.next(profileInfo);
     console.log(profileInfo);
    }
    
    

}

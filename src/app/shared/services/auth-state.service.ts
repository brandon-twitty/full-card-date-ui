import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthStateService {
  private authState = new Subject<any>();

  publishAuthState(data: any) {
    this.authState.next(data);
  }

  /*getObservable() : Subject<any> {
    return this.authState
  }*/
  constructor() { }
}

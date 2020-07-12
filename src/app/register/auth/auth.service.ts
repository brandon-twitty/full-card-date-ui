import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';
import { CognitoUser } from 'amazon-cognito-identity-js';
import { Hub, ICredentials } from '@aws-amplify/core';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public loggedIn: boolean;
  private _authState: Subject<CognitoUser|any> = new Subject<CognitoUser|any>();
  authState: Observable<CognitoUser|any> = this._authState.asObservable();

  public static SIGN_IN = 'signIn';
  public static SIGN_OUT = 'signOut';
  constructor() {
    Hub.listen('auth', ( data) => {
      const { channel, payload } = data;
      if (channel === 'auth') {
        this._authState.next(payload.event);
      }
    });
  }
}

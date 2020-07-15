import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userUrl = 'https://x38gylh92e.execute-api.us-east-2.amazonaws.com/dev/api/get-user-by-card-id';
  constructor(private http: HttpClient) { }

  public getUserByCardId(cardId: any) {
    return this.http.get(`${this.userUrl}/${cardId}`);

  }
}

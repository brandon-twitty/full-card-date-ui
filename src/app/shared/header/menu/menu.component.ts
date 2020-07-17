import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Auth} from 'aws-amplify';
import {APIService} from '../../../API.service';
import {Router} from '@angular/router';
import {User} from '../../models/user';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  @Output() User = new EventEmitter<User>();
  userId: any;
  username: any;
  user = new User('', '', '', '', '', '', '', '', 0);
  showPhoto: boolean;
  constructor(private api: APIService, public router: Router) {

  }

  ngOnInit() {
    this.showPhoto = false;
    Auth.currentAuthenticatedUser({
      bypassCache: false
    }).then(async user => {
      console.log('inside async current user ', user);
      this.username = user.username;
      this.userId = user.attributes.sub;
      console.log('user sub = ', user.attributes.sub);
      const result = await this.api.GetUser(this.userId);
      if (!result){
        this.router.navigate(['/register']);
       } else {
        this.showPhoto = !!result.image;
        this.user = new User(
           this.userId,
           result.username,
           result.firstName,
           result.lastName,
           result.email,
           result.bio,
           result.phoneNumber,
           result.image,
           result.messageCount
       );
       // this.showPhoto = !!result.image;
      }
      console.log('API result =', result);

    });
    this.emmitUser();
  }
  editProfilePage() {
    console.log('nav to edit profile');
  }
  emmitUser(){
    console.log('emit user', this.user  ),
    this.User.emit(this.user);
  }
  signIn(){

  }
  logOut(){
    Auth.signOut({ global: true })
        .then(data => {
          this.router.navigate(['/register']);
        })
        .catch(err => console.log(err));
  }
}

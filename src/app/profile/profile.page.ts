import { Component, OnInit } from '@angular/core';
import {User} from '../models/user';
import {APIService} from '../API.service';
import {Router} from '@angular/router';
import {Auth} from 'aws-amplify';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  userId: string;
  userName: string;
  imagePath: string;
  showPhoto: boolean;
  userCreated: boolean;
  user = new User('', '', '', '', '', '', '');
  constructor(private api: APIService, public router: Router) { }

  ngOnInit() {
    this.showPhoto = false;
    Auth.currentAuthenticatedUser({
      bypassCache: false
    }).then(async user => {
      this.userName = user.username;
      this.userId = user.attributes.sub;
      let result = await this.api.GetUser(this.userId);
      if (!result) {
        this.userCreated = false;
        this.user = new User('', '', '', '', '', '','');
      } else {
        this.userCreated = true;
        this.showPhoto = !!result.image;
        // @ts-ignore
        this.user = new User(
            this.userId,
            result.username,
            result.firstName,
            result.lastName,
            result.bio,
            result.image
        )
      }
    })
        .catch(err => console.log(err));
  }
  getType(): string {
    return this.userCreated ? 'UpdateUser' : 'CreateUser';
  }
  async updateProfile() {
    const user = {
      id: this.userId,
      username: this.user.firstName + '_' + this.user.lastName,
      firstName: this.user.firstName,
      lastName: this.user.lastName,
      bio: this.user.aboutMe,
      image: this.user.imageUrl
    };
    await this.api[this.getType()](user);
  }
  editPhoto() {
    this.showPhoto = false;

  }
  async onImageUploaded(e) {
    this.user.imageUrl = e.key;
    if (this.userCreated) {
      await this.api.UpdateUser({
        id: this.userId,
        image: this.user.imageUrl
      });
    }
    this.showPhoto = true;
  }
  logOut(){
    Auth.signOut({ global: true })
        .then(data => {
          this.router.navigate(['/auth']);
        })
        .catch(err => console.log(err));
  }

}

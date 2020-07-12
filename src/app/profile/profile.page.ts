import { Component, OnInit } from '@angular/core';
import {User} from '../shared/models/user';
import {APIService, CreateUserInput} from '../API.service';
import {Router} from '@angular/router';
import {Auth} from 'aws-amplify';
import {FormBuilder, FormGroup} from '@angular/forms';
import {getAttributeValue} from 'codelyzer/util/getAttributeValue';

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
  createProfileForm: FormGroup;
  user = new User('', '', '', '', '', '', '', '', 0);
  constructor(private api: APIService, public router: Router, private fb: FormBuilder) {

  }

  ngOnInit() {
    console.log('twitty is logged in', Auth.currentUserInfo());
    this.showPhoto = false;
   // this.createProfile();
    Auth.currentAuthenticatedUser({
      bypassCache: false
    }).then(async user => {
      console.log('inside async current user ', user);
      this.userName = user.username;
      this.userId = user.attributes.sub;
      console.log('user sub = ', user.attributes.sub);
      let result = await this.api.GetUser(this.userId);
      console.log('API result =', result);
      if (!result) {
        this.userCreated = false;
        this.user = new User('', '', '', '', '', '', '', '', 0);
      } else {
        this.userCreated = true;
        this.showPhoto = !!result.image;
        // @ts-ignore
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
        console.log('user logged in', this.user);
      }
    })
        .catch(err => console.log(err));
  }
  /*createProfile(){
    this.createProfileForm = this.fb.group({
      username: [''],
      firstName: [''],
      lastName: [''],
      bio: ['']
    });
  }*/
  getType(): string {
    console.log('is user created? =', this.userCreated);
    return this.userCreated ? 'UpdateUser' : 'CreateUser';
  }
  async updateProfile() {
    const user = {
      id: this.userId,
      username: this.user.username,
      firstName: this.user.firstName,
      lastName: this.user.lastName,
      email: this.user.email,
      bio: this.user.bio,
      phoneNumber: this.user.phoneNumber,
      image: this.user.imageUrl,
      messageCount: this.user.messageCount
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


}

import { Component, OnInit } from '@angular/core';
import {APIService, CreateUserInput} from '../../API.service';
import { Auth } from 'aws-amplify';
import {User} from '../../models/user';
import {Router} from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  signstatus: string = 'signin';
  toVerifyEmail: boolean = false;
  userId: string;
  userName: string;
  imagePath: string;
  showPhoto: boolean;
  userCreated: boolean;
  user = new User('', '', '', '', '', '', '');

  constructor(private api: APIService, router: Router) { }

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
      bio: this.user.aboutMe
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
  onSignUp() {
    this.signstatus = 'signup';
  }
  onSignIn() {
    this.signstatus = 'signin';
  }
  singUpToAWS(email: HTMLInputElement,contactNo: HTMLInputElement,username: HTMLInputElement,password: HTMLInputElement) {

    this.userName = username.value;

    const user = {
      username: username.value,
      password: password.value,
      attributes: {
        email: email.value,          // optional
        phone_number: contactNo.value,   // optional - E.164 number convention
        // other custom attributes
      }
    }

    Auth.signUp(user)
        .then(data => {
          console.log(data);
          this.toVerifyEmail = true;
          this.signstatus = "";
        })
        .catch(err => console.log(err));

    // Auth.resendSignUp(username).then(() => {
    //     console.log('code resent successfully');
    // }).catch(e => {
    //     console.log(e);
    // });

  }
  onVerify(verifycode: HTMLInputElement) {
    // After retrieving the confirmation code from the user
    Auth.confirmSignUp(this.userName, verifycode.value, {
      // Optional. Force user confirmation irrespective of existing alias. By default set to True.
      forceAliasCreation: true
    }).then(data => {
      console.log(data)
      this.toVerifyEmail = false;
      this.signstatus = 'signin'
    })
        .catch(err => console.log(err));
  }
  signInToAWS(email: HTMLInputElement, password: HTMLInputElement ) {

    const authInfo = {
      username: email.value,
      password: password.value
    }

    Auth.signIn(authInfo).then(user => {
      console.log(user);
      this.router.navigate(['/dashboard'])
    })
        .catch(err => console.log(err));

  }



}

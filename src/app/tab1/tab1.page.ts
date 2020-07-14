import {Component, OnInit} from '@angular/core';
import {APIService} from '../API.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {NavigationExtras, Router} from '@angular/router';
import {LightUser} from '../shared/models/light-user';
import {InitialConvo} from '../shared/models/initial-convo';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  imageUrl: string;
  lightUsersName: any;
  nameForm: FormGroup;
  initialConvo: InitialConvo = new InitialConvo();
  constructor(private api: APIService, private fb: FormBuilder, private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    const state = navigation.extras.state;
    this.initialConvo.lightUsersName = '';
    this.initialConvo.initialMessage = '';
    this.initialConvo.lightUserPhoneNumber = '';
  }

  ngOnInit() {
    // getUserImageUrlById()
    this.createNameForm();
  }
  createNameForm(){
    this.nameForm = this.fb.group({
      ltFirstName: ['']
    });
  }
  nextTab(tabRoute: string){
    const navigationExtras: NavigationExtras = {
      state: {
        lightUsersName: this.nameForm.controls.ltFirstName.value
      }
    };
    console.log('Tab 1 navigation State', navigationExtras);
    this.router.navigate([tabRoute], navigationExtras);
  }
  getUserImageUrlById(){

  }
}

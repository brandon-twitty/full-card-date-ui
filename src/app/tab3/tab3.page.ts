import {Component, OnInit} from '@angular/core';
import {InitialConvo} from '../shared/models/initial-convo';
import {FormBuilder, FormGroup} from '@angular/forms';
import {NavigationExtras, Router} from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
  initialConvo: InitialConvo = new InitialConvo();
  lightUsersName: any;
  initialMessage: any;
  phoneNumberForm: FormGroup;
  constructor(private fb: FormBuilder, private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    const state = navigation.extras.state;
    this.lightUsersName = state.lightUsersName;
    this.initialMessage = state.initialMessage;
    this.initialConvo.lightUserPhoneNumber = '';
  }
  ngOnInit(){
    this.createPhoneForm();
    console.log('initial navigation state', this.initialConvo);
  }
  createPhoneForm(){
    this.phoneNumberForm = this.fb.group({
      phoneNumber: ['']
    });
  }
  sendInitialMessage(){
    this.initialConvo.lightUsersName = this.lightUsersName;
    this.initialConvo.initialMessage = this.initialMessage;
    this.initialConvo.lightUserPhoneNumber = this.phoneNumberForm.controls.phoneNumber.value;
    // TODO create service to send to Lambda
    console.log('the initialConvo Object', this.initialConvo);

  }
  nextTab(tabRoute: string){
    const navigationExtras: NavigationExtras = {
      state: {
        initialConvo: this.initialConvo,
        lightUserPhoneNumber: this.phoneNumberForm.controls.phoneNumber.value
      }
    };
    console.log('Tab 3 navigation State', navigationExtras);
    this.router.navigate([tabRoute], navigationExtras);
  }
}



import {Component, OnInit} from '@angular/core';
import {InitialConvo} from '../shared/models/initial-convo';
import {FormBuilder, FormGroup} from '@angular/forms';
import {NavigationExtras, Router} from '@angular/router';
import {TwilioService} from '../shared/services/twilio.service';

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
  userId: any;
  constructor(private fb: FormBuilder, private router: Router, private twilioService: TwilioService) {
    const navigation = this.router.getCurrentNavigation();
    const state = navigation.extras.state;
    this.lightUsersName = state.lightUsersName;
    this.initialMessage = state.initialMessage;
    this.initialConvo.From = '';
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
  getUserProfile(){

  }
  setUpInitialMessage(){
    this.initialConvo.lightUserName = this.lightUsersName;
    this.initialConvo.Body = this.initialMessage;
    this.initialConvo.From = this.phoneNumberForm.controls.phoneNumber.value;
    this.initialConvo.To = this.userId;
    // TODO create service to send to Lambda
    console.log('the initialConvo Object', this.initialConvo);

  }
  sendMessage(initialConvo){
    this.twilioService.sendInitialMessage(initialConvo)
        .subscribe(data => {
          console.log(data);
        });
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



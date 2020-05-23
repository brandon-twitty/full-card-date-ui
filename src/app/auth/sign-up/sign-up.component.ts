import { Component, OnInit } from '@angular/core';
import { FormFieldTypes } from '@aws-amplify/ui-components';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  signupForm: FormFieldTypes;
  constructor() {
    this.signupForm = [
      {
        type: 'username',
        label: 'Username',
        placeholder: 'Choose Username',
        required: true,
      },
      {
        type: 'email',
        label: 'Email Address',
        placeholder: 'Email Address',
        required: true,
      },
      {
        type: 'password',
        label: 'Password',
        placeholder: 'Choose a password',
        required: true,
      },
      {
        type: 'phone_number',
        label: 'Phone Number',
        placeholder: 'Enter Phone Number',
        required: true,
      }
    ];
  }

  ngOnInit() {}

}

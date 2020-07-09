import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import {AmplifyUIAngularModule} from '@aws-amplify/ui-angular';
import { RegisterPageRoutingModule } from './register-routing.module';
import { RegisterPage } from './register.page';
 import {AmplifyIonicModule, AmplifyService} from 'aws-amplify-angular';
import {AuthComponent} from './auth/auth.component';
import {RouterModule} from '@angular/router';
import Amplify from 'aws-amplify';
import awsconfig from '../../aws-exports';
import {HeaderModule} from '../shared/header/header.module';

Amplify.configure(awsconfig);
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule,
    RegisterPageRoutingModule,
    AmplifyUIAngularModule,
    AmplifyIonicModule,
      HeaderModule
  ],
  providers: [AmplifyService],
  declarations: [RegisterPage, AuthComponent]
})
export class RegisterPageModule {}

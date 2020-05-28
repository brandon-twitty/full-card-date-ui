import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import {AmplifyUIAngularModule} from '@aws-amplify/ui-angular';
import { RegisterPageRoutingModule } from './register-routing.module';
import { RegisterPage } from './register.page';
import {AmplifyAngularModule, AmplifyService} from 'aws-amplify-angular';
import {AuthComponent} from './auth/auth.component';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
      RouterModule,
    RegisterPageRoutingModule,
    AmplifyAngularModule
  ],
  providers: [AmplifyService],
  declarations: [RegisterPage, AuthComponent]
})
export class RegisterPageModule {}

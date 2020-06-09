import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfilePageRoutingModule } from './profile-routing.module';

import { ProfilePage } from './profile.page';
import {AmplifyAngularModule, AmplifyService} from 'aws-amplify-angular';
import {AmplifyContainer, AmplifyUIAngularModule} from '@aws-amplify/ui-angular';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ProfilePageRoutingModule,
        AmplifyAngularModule,
        AmplifyUIAngularModule,

    ],
  declarations: [ProfilePage, AmplifyContainer],
    providers: [AmplifyService]
})
export class ProfilePageModule {}

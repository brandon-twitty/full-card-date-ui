import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfilePageRoutingModule } from './profile-routing.module';

import { ProfilePage } from './profile.page';
import {AmplifyAngularModule, AmplifyService} from 'aws-amplify-angular';
import {AmplifyContainer, AmplifyUIAngularModule} from '@aws-amplify/ui-angular';
import {HeaderModule} from '../shared/header/header.module';
import {AmplifyIonicModule} from '@deniskkk/aws-amplify-angular';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        IonicModule,
        ProfilePageRoutingModule,
        AmplifyAngularModule,
        AmplifyUIAngularModule,
        HeaderModule,
        AmplifyIonicModule,

    ],
  declarations: [ProfilePage, AmplifyContainer],
    providers: [AmplifyService],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ProfilePageModule {}

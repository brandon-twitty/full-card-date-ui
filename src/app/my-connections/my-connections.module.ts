import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyConnectionsPageRoutingModule } from './my-connections-routing.module';

import { MyConnectionsPage } from './my-connections.page';
import {HeaderModule} from '../shared/header/header.module';
import {AmplifyAngularModule} from 'aws-amplify-angular';
import {AmplifyUIAngularModule} from '@aws-amplify/ui-angular';
import {AmplifyIonicModule} from '@deniskkk/aws-amplify-angular';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        MyConnectionsPageRoutingModule,
        HeaderModule,
        AmplifyAngularModule,
        AmplifyUIAngularModule,
        AmplifyIonicModule
    ],
  declarations: [MyConnectionsPage]
})
export class MyConnectionsPageModule {}

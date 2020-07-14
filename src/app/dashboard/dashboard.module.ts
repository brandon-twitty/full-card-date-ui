import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashboardPageRoutingModule } from './dashboard-routing.module';

import { DashboardPage } from './dashboard.page';
import {HeaderModule} from '../shared/header/header.module';
import {AmplifyUIAngularModule} from '@aws-amplify/ui-angular';
import {AmplifyAngularModule} from 'aws-amplify-angular';
import {AmplifyIonicModule} from '@deniskkk/aws-amplify-angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AmplifyAngularModule,
    AmplifyUIAngularModule,
    HeaderModule,
    AmplifyIonicModule,
    DashboardPageRoutingModule
  ],
  declarations: [DashboardPage]
})
export class DashboardPageModule {}

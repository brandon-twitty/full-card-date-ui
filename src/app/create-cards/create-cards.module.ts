import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateCardsPageRoutingModule } from './create-cards-routing.module';

import { CreateCardsPage } from './create-cards.page';
import {AmplifyAngularModule} from 'aws-amplify-angular';
import {AmplifyUIAngularModule} from '@aws-amplify/ui-angular';
import {HeaderModule} from '../shared/header/header.module';
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
    CreateCardsPageRoutingModule
  ],
  declarations: [CreateCardsPage]
})
export class CreateCardsPageModule {}

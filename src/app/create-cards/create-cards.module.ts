import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateCardsPageRoutingModule } from './create-cards-routing.module';

import { CreateCardsPage } from './create-cards.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateCardsPageRoutingModule
  ],
  declarations: [CreateCardsPage]
})
export class CreateCardsPageModule {}

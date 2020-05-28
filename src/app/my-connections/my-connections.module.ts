import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyConnectionsPageRoutingModule } from './my-connections-routing.module';

import { MyConnectionsPage } from './my-connections.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyConnectionsPageRoutingModule
  ],
  declarations: [MyConnectionsPage]
})
export class MyConnectionsPageModule {}

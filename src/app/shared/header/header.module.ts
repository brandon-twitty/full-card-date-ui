import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MenuComponent} from './menu/menu.component';
import {ToolbarComponent} from './toolbar/toolbar.component';
import {IonicModule} from '@ionic/angular';
import {AmplifyAngularModule} from 'aws-amplify-angular';
import {AmplifyUIAngularModule} from '@aws-amplify/ui-angular';
import {AmplifyIonicModule} from '@deniskkk/aws-amplify-angular';



@NgModule({
  declarations: [MenuComponent, ToolbarComponent],
  imports: [
    CommonModule,
      IonicModule,
    AmplifyAngularModule,
    AmplifyUIAngularModule,
    AmplifyIonicModule,
  ],
  exports: [MenuComponent]
})
export class HeaderModule { }

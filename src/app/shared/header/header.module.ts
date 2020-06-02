import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MenuComponent} from './menu/menu.component';
import {ToolbarComponent} from './toolbar/toolbar.component';
import {IonicModule} from '@ionic/angular';



@NgModule({
  declarations: [MenuComponent, ToolbarComponent],
  imports: [
    CommonModule,
      IonicModule
  ],
  exports: [MenuComponent]
})
export class HeaderModule { }

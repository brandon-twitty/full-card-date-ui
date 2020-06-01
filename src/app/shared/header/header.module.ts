import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MenuComponent} from './menu/menu.component';
import {ToolbarComponent} from './toolbar/toolbar.component';



@NgModule({
  declarations: [MenuComponent, ToolbarComponent],
  imports: [
    CommonModule
  ],
  exports: [MenuComponent]
})
export class HeaderModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateCardsPage } from './create-cards.page';

const routes: Routes = [
  {
    path: '',
    component: CreateCardsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateCardsPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyConnectionsPage } from './my-connections.page';

const routes: Routes = [
  {
    path: '',
    component: MyConnectionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyConnectionsPageRoutingModule {}

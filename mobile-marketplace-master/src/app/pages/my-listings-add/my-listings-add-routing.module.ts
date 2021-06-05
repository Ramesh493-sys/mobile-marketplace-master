import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyListingsAddPage } from './my-listings-add.page';

const routes: Routes = [
  {
    path: '',
    component: MyListingsAddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyListingsAddPageRoutingModule {}

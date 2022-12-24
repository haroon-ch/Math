import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MinMaxPage } from './min-max.page';

const routes: Routes = [
  {
    path: '',
    component: MinMaxPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MinMaxPageRoutingModule {}

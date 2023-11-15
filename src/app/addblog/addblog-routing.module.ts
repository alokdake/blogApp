import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddblogPage } from './addblog.page';

const routes: Routes = [
  {
    path: '',
    component: AddblogPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddblogPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewblogPage } from './viewblog.page';

const routes: Routes = [
  {
    path: '',
    component: ViewblogPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewblogPageRoutingModule {}

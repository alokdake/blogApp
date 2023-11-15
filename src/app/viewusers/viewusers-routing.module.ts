import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewusersPage } from './viewusers.page';

const routes: Routes = [
  {
    path: '',
    component: ViewusersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewusersPageRoutingModule {}

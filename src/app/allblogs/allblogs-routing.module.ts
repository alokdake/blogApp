import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllblogsPage } from './allblogs.page';

const routes: Routes = [
  {
    path: '',
    component: AllblogsPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllblogsPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReportlistPage } from './reportlist.page';

const routes: Routes = [
  {
    path: '',
    component: ReportlistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReportlistPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReportblogPage } from './reportblog.page';

const routes: Routes = [
  {
    path: '',
    component: ReportblogPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReportblogPageRoutingModule {}

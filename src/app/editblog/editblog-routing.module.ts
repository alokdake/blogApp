import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditblogPage } from './editblog.page';

const routes: Routes = [
  {
    path: '',
    component: EditblogPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditblogPageRoutingModule {}

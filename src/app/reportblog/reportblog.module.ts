import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReportblogPageRoutingModule } from './reportblog-routing.module';

import { ReportblogPage } from './reportblog.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReportblogPageRoutingModule
  ],
  declarations: [ReportblogPage]
})
export class ReportblogPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewblogPageRoutingModule } from './viewblog-routing.module';

import { ViewblogPage } from './viewblog.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewblogPageRoutingModule
  ],
  declarations: [ViewblogPage]
})
export class ViewblogPageModule {}

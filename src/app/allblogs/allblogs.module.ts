import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllblogsPageRoutingModule } from './allblogs-routing.module';

import { AllblogsPage } from './allblogs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AllblogsPageRoutingModule
  ],
  declarations: [AllblogsPage]
})
export class AllblogsPageModule {}

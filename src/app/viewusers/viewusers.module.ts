import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewusersPageRoutingModule } from './viewusers-routing.module';

import { ViewusersPage } from './viewusers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewusersPageRoutingModule
  ],
  declarations: [ViewusersPage]
})
export class ViewusersPageModule {}

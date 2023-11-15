import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditblogPageRoutingModule } from './editblog-routing.module';

import { EditblogPage } from './editblog.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditblogPageRoutingModule
  ],
  declarations: [EditblogPage]
})
export class EditblogPageModule {}

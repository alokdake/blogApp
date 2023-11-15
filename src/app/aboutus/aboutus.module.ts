import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AboutusPageRoutingModule } from './aboutus-routing.module';

import { AboutusPage } from './aboutus.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, AboutusPageRoutingModule],
  declarations: [AboutusPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AboutusPageModule {}

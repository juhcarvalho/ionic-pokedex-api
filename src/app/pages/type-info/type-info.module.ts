import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TypeInfoPageRoutingModule } from './type-info-routing.module';

import { TypeInfoPage } from './type-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TypeInfoPageRoutingModule
  ],
  declarations: [TypeInfoPage]
})
export class TypeInfoPageModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TypeInfoPage } from './type-info.page';

const routes: Routes = [
  {
    path: '',
    component: TypeInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TypeInfoPageRoutingModule {}

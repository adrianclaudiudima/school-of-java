import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CommonModule} from '@angular/common';
import {ShopComponent} from './shop.component';

const routes: Routes = [
  {
    path: '',
    component: ShopComponent
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ShopRoutingModule {

}


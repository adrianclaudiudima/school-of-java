import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CommonModule} from '@angular/common';
import {ShopDetailsComponent} from './components/shop-details/shop-details.component';
import {ShopPromotionsComponent} from './components/shop-promotions/shop-promotions.component';
import {ShopComponent} from './shop.component';
import {ShopHomeComponent} from './components/shop-home/shop-home.component';

const routes: Routes = [
  {
    component: ShopComponent,
    path: '',
    children: [{
      path: '',
      component: ShopHomeComponent
    }, {
      path: 'promotions',
      component: ShopPromotionsComponent
    }, {
      path: 'details',
      component: ShopDetailsComponent
    }]

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


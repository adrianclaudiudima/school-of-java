import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatButtonModule} from '@angular/material';
import {ShopComponent} from './shop.component';
import {ProductCardReferenceComponent} from '../product-card-reference/product-card-reference.component';
import {ShopRoutingModule} from './shop.routing';
import {SharedModule} from '../../shared/shared.module';
import {ShopDetailsComponent} from './components/shop-details/shop-details.component';
import {ShopPromotionsComponent} from './components/shop-promotions/shop-promotions.component';
import {ShopHomeComponent} from './components/shop-home/shop-home.component';

@NgModule({
  declarations: [
    ShopHomeComponent,
    ShopComponent,
    ShopDetailsComponent,
    ShopPromotionsComponent,
    ProductCardReferenceComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    ShopRoutingModule,
    MatButtonModule,
    SharedModule
  ],
  exports: []
})
export class ShopModule {


}

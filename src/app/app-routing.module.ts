import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MovieComponent} from './components/movie/movie.component';
import {HomeComponent} from './components/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'movie',
    component: MovieComponent
  }, {
    path: 'shop',
    loadChildren: './components/shop/shop.module#ShopModule'
  }, {
    path: 'product-preview/:id',
    loadChildren: 'src/app/components/shop/shop.module#ShopModule'
  },
  {
    path: '**',
    component: HomeComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

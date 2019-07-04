import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MatButtonModule, MatToolbarModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {ProductCardComponent} from './components/product-card/product-card.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppHoverDirective} from './directives/app-hover.directive';
import {MovieService} from './services/movie.service';
import {LoggerService} from './services/logger.service';
import {MovieComponent} from './components/movie/movie.component';
import {HttpClientModule} from '@angular/common/http';
import {CreateMovieTemplateComponent} from './components/movie/create-movie/create-movie-template/create-movie-template.component';
import {CreateMovieReactiveComponent} from './components/movie/create-movie/create-movie-reactive/create-movie-reactive.component';
import {SharedModule} from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    ProductCardComponent,
    AppHoverDirective,
    MovieComponent,
    CreateMovieTemplateComponent,
    CreateMovieReactiveComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatButtonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  exports: [],
  providers: [
    MovieService,
    LoggerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

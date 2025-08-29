import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginScreenComponent } from './login-screen/login-screen.component';
import { LoginFormComponent } from './login-screen/login-form/login-form.component';
import { HomeComponent } from './home/home.component';
import { SearchGitComponent } from './home/search-git/search-git.component';
import { GithubProfileComponent } from './home/github-profile/github-profile.component';
import { favouriteReducer } from './store/favourite.reducer';
import { FavouritesComponent } from './home/favourites/favourites.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginScreenComponent,
    LoginFormComponent,
    HomeComponent,
    SearchGitComponent,
    GithubProfileComponent,
    FavouritesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({favourite: favouriteReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

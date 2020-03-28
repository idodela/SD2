import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/mainpage/login/login.component';
import { HeaderComponent } from './components/mainpage/header/header.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NavbarComponent } from './components/mainpage/navbar/navbar.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { UploadArtworkComponent } from './components/upload-artwork/upload-artwork.component';
import {RouterModule, Routes} from '@angular/router';
import { LoanedArtsComponent } from './components/loaned-arts/loaned-arts.component';
import { AvailablaArtsComponent } from './components/availabla-arts/availabla-arts.component';
import { WalletComponent } from './components/wallet/wallet.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { RentartComponent } from './components/rentart/rentart.component';
import { ArtDetailsComponent } from './components/art-details/art-details.component';
import { HomeComponent } from './components/home/home.component';
import {LoginActivate} from './guards/LoginActivate';
import {AuthInterceptor} from './interceptors/authInterceptor';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    NavbarComponent,
    UploadArtworkComponent,
    LoanedArtsComponent,
    AvailablaArtsComponent,
    WalletComponent,
    RentartComponent,
    ArtDetailsComponent,
    HomeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,

  ],
  providers: [LoginActivate,
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

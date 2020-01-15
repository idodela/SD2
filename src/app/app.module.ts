import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/mainpage/login/login.component';
import { HeaderComponent } from './components/mainpage/header/header.component';
import {FormsModule} from '@angular/forms';
import { NavbarComponent } from './components/mainpage/navbar/navbar.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { UploadArtworkComponent } from './components/upload-artwork/upload-artwork.component';
import {RouterModule, Routes} from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    NavbarComponent,
    UploadArtworkComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

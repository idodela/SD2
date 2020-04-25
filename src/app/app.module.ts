import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/mainpage/login/login.component';
import { HeaderComponent } from './components/mainpage/header/header.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NavbarComponent } from './components/mainpage/navbar/navbar.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { UploadArtworkComponent } from './components/upload-artwork/upload-artwork.component';
import { LoanedArtsComponent } from './components/loaned-arts/loaned-arts.component';
import { AvailablaArtsComponent } from './components/availabla-arts/availabla-arts.component';
import { WalletComponent } from './components/wallet/wallet.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { RentartComponent } from './components/rentart/rentart.component';
import { ArtDetailsComponent } from './components/art-details/art-details.component';
import { HomeComponent } from './components/home/home.component';
import {LoginActivate} from './guards/LoginActivate';
import {AuthInterceptor} from './interceptors/authInterceptor';
import {AdminusersComponent} from './components/adminusers/adminusers.component';
import {MyartsComponent} from './components/myarts/myarts.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { EditUserDialogComponent } from './components/edit-user-dialog/edit-user-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import { NgxSpinnerModule } from 'ngx-spinner';
import {ToastrModule} from 'ngx-toastr';
import {SpinnerInterceptor} from './interceptors/spinnerInterceptor';
import {DatePipe} from '@angular/common';



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
    AdminusersComponent,
    MyartsComponent,
    AddUserComponent,
    EditUserDialogComponent,


  ],
  entryComponents:[
    EditUserDialogComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatDialogModule,
    NgxSpinnerModule,
    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: 'toast-top-center',
      preventDuplicates: true
    })


  ],
  providers: [LoginActivate,
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: SpinnerInterceptor, multi: true},
    DatePipe

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

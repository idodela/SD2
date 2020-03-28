import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './components/mainpage/login/login.component';
import {UploadArtworkComponent} from './components/upload-artwork/upload-artwork.component';
import {LoanedArtsComponent} from './components/loaned-arts/loaned-arts.component';
import {AvailablaArtsComponent} from './components/availabla-arts/availabla-arts.component';
import {WalletComponent} from './components/wallet/wallet.component';
import {RentartComponent} from "./components/rentart/rentart.component";
import {HomeComponent} from "./components/home/home.component";
import {LoginActivate} from './guards/LoginActivate';
import {AdminusersComponent} from "./components/adminusers/adminusers.component";
import {MyartsComponent} from "./components/myarts/myarts.component";
import {AddUserComponent} from "./components/add-user/add-user.component";



const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'upload-artwork', component: UploadArtworkComponent,data: { requiresLogin: true }, canActivate:[LoginActivate]},
  {path: 'loaned-arts', component: LoanedArtsComponent,data: { requiresLogin: true }, canActivate:[LoginActivate]},
  {path: 'available-arts', component: AvailablaArtsComponent,data: { requiresLogin: true }, canActivate:[LoginActivate]},
  {path: 'wallet', component: WalletComponent, data: { requiresLogin: true },canActivate:[LoginActivate]},
  {path:'rentart', component: RentartComponent,data: { requiresLogin: true }, canActivate:[LoginActivate]},
  {path:'home' , component:HomeComponent,data: { requiresLogin: true }, canActivate:[LoginActivate]},
  {path:'adminusers' , component:AdminusersComponent, data: { requiresLogin: true }, canActivate:[LoginActivate]},
  {path:'adminusers/add-user' , component:AddUserComponent, data: { requiresLogin: true }, canActivate:[LoginActivate]},
  {path: 'myarts', component: MyartsComponent, data: { requiresLogin: true }, canActivate:[LoginActivate]},



];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

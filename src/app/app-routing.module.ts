import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './components/mainpage/login/login.component';
import {UploadArtworkComponent} from './components/upload-artwork/upload-artwork.component';
import {LoanedArtsComponent} from './components/loaned-arts/loaned-arts.component';
import {AvailablaArtsComponent} from './components/availabla-arts/availabla-arts.component';
import {WalletComponent} from './components/wallet/wallet.component';
import {RentartComponent} from "./components/rentart/rentart.component";
import {HomeComponent} from "./components/home/home.component";
import {AdminusersComponent} from "./components/adminusers/adminusers.component";
import {MyartsComponent} from "./components/myarts/myarts.component";
import {AddUserComponent} from "./components/add-user/add-user.component";



const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'upload-artwork', component: UploadArtworkComponent},
  {path: 'loaned-arts', component: LoanedArtsComponent},
  {path: 'available-arts', component: AvailablaArtsComponent},
  {path: 'wallet', component: WalletComponent},
  {path:'rentart', component: RentartComponent},
  {path:'home' , component:HomeComponent},
  {path:'adminusers' , component:AdminusersComponent},
  {path:'adminusers/add-user' , component:AddUserComponent},
  {path: 'myarts', component: MyartsComponent},




];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

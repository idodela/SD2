import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './components/mainpage/login/login.component';
import {UploadArtworkComponent} from './components/upload-artwork/upload-artwork.component';
import {LoanedArtsComponent} from './components/loaned-arts/loaned-arts.component';
import {AvailablaArtsComponent} from './components/availabla-arts/availabla-arts.component';
import {WalletComponent} from './components/wallet/wallet.component';


const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'upload-artwork', component: UploadArtworkComponent},
  {path: 'loaned-arts', component: LoanedArtsComponent},
  {path: 'availabla-arts', component: AvailablaArtsComponent},
  {path: 'wallet', component: WalletComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

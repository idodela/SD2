import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './components/mainpage/login/login.component';
import {UploadArtworkComponent} from './components/upload-artwork/upload-artwork.component';


const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'upload-artwork', component: UploadArtworkComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

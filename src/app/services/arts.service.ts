import { Injectable } from '@angular/core';
import {Art} from '../models/art';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {User} from '../models/user';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {ToastrService} from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ArtsService {

  artsList: Art[]=[];

  constructor(private http: HttpClient, private router: Router, private toast: ToastrService) {
    // this.addRandomArts()
  }


  // addRandomArts(): Art[]{
  //   this.artsList.push(new Art("Van Gogh", 35, "../assets/nachtwacht .jpg",true));
  //   this.artsList.push(new Art("Van jem", 50,"../assets/nachtwacht .jpg",false));
  //   this.artsList.push(new Art( "Van blbl", 60,"../assets/nachtwacht .jpg",true));
  //   this.artsList.push(new Art( "Van Gogh", 35,"../assets/nachtwacht .jpg",true));
  //   this.artsList.push(new Art("Van jem", 50,"../assets/nachtwacht .jpg",true));
  //   this.artsList.push(new Art( "Van blbl", 60,"../assets/nachtwacht .jpg",true));
  //   this.artsList.push(new Art( "Van Gogh", 35,"../assets/nachtwacht .jpg",true));
  //   this.artsList.push(new Art( "Van jem", 50,"../assets/nachtwacht .jpg",true));
  //   this.artsList.push(new Art( "Van blbl", 60,"../assets/nachtwacht .jpg",true));
  //   return this.artsList
  //
  // }

  public addArt(formData: FormData): Observable<any> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    return this.http.post(environment.apiUrl.concat('/arts'), formData, {headers: headers})
      .pipe(map((res:any) => {this.toast.success("Art has been successfully created")},
        error => {
        this.toast.error(error)
        }))

  }

  getAllArts(): Observable<any>{
    return this.http.get<Art[]>(environment.apiUrl.concat('/arts'));

  }

  getUserArts(){
    return this.http.get<Art[]>(environment.apiUrl.concat('/arts/userArts'));
  }

  loanArt(id:number){
    return this.http.post(environment.apiUrl.concat('/loan'),id ).subscribe((res) => {
      console.log(res)
    })
  }
}



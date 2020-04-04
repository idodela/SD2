import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {User} from '../models/user';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class UserService
{


  constructor(private http: HttpClient, private  router : Router) {
  }

  getUsers(){
  return this.http.get<User[]>(environment.apiUrl.concat('/users/'));

  }

  saveUser(user : User){
   const  postObservable = this.http.post<User>(environment.apiUrl.concat('/users'), user);

    postObservable.subscribe(response => {
      console.log(response);
    });


  }
}

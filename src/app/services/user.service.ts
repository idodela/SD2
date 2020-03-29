import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {User} from '../models/user';
import {environment} from '../../environments/environment';



@Injectable({
  providedIn: 'root'
})
export class UserService
{


  constructor(private http: HttpClient, private  router : Router) {
  }

  getUsers(){

  }

  saveUser(user : User){
   const  postObservable = this.http.post<User>(environment.apiUrl.concat('/users'), user);

    postObservable.subscribe(response => {
      console.log(response);
    });


  }
}

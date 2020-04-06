import { Injectable } from '@angular/core';
import {User} from '../models/user';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {JwtHelperService} from '@auth0/angular-jwt';
import {Router} from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  public readonly STORAGE_BASE_URL = 'http://localhost:8080';
  currentUser: User;                    // user information
  currentToken: string = null;
  jwtService = new JwtHelperService();  // utility function to decode token

  constructor(private http: HttpClient, private  router : Router) {
    this.updateUserInformation();
  }

  isLoggedIn(): boolean {
    this.currentToken = sessionStorage.getItem('token');

    return this.currentToken !==null;


  }

  signIn(userId: string, userPassword: string, target?: string) {
    console.log('userId: ' + userId + ', userPassword: ' + userPassword);
    const postObservable = this.http.post<HttpResponse<User>>(this.STORAGE_BASE_URL + '/users/login',
      { id: userId, password: userPassword },
      { observe: 'response' });

    postObservable.subscribe(response => {
        console.log(response);
        let token = response.headers.get('Authorization');

        if (token == null) {
          throw new Error('token was not present in the response');
        }
        token = token.replace('Bearer ', '');

        // this.setToken(token,((response.body as unknown) as User).name)
        sessionStorage.setItem('token' , token);
        this.updateUserInformation();
      },
      (err) => {
        console.log('authentication error', err);
        // this.setToken(null, null);
        this.currentUser = null;
        this.currentToken = null;
      });
    return postObservable;
  }

  logout() {
    sessionStorage.removeItem('token');
    this.updateUserInformation();
  }

  private updateUserInformation() {
    this.currentToken = sessionStorage.getItem('token');

    if (this.currentToken != null) {
      const decodedToken = this.jwtService.decodeToken(this.currentToken);

      this.currentUser = new User(decodedToken.id, decodedToken.name, decodedToken.role);
      console.log(this.currentUser.userType);
      this.currentUser.id = decodedToken.id;
      this.router.navigate(['/home']);

    } else {
      this.currentUser = new User('', '', '');
    }
  }

}

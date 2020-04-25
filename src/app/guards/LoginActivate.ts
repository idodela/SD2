import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthenticationService} from '../services/authentication.service';

@Injectable()
export class LoginActivate implements  CanActivate{


  constructor( private authenticationService: AuthenticationService, private router: Router) {
  }

  canActivate(): boolean {
    if (!this.authenticationService.isLoggedIn()) {
      this.router.navigate(['']);
      return false;
    }
    return true;
  }
}



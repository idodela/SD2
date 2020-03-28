import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthenticationService} from '../services/authentication.service';

@Injectable()
export class LoginActivate implements  CanActivate{


  constructor( private authenticationService: AuthenticationService, private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean>|Promise<boolean>|boolean {
    const requiresLogin = route.data.requiresLogin || false;
    // if (requiresLogin) {
    //   // Check that the user is logged in...
    //   if(!this.authenticationService.isLoggedIn())
    //     this.router.navigate(['']);
    //     return false
    // }
    return true
  }
}



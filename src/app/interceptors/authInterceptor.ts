import {HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import { Injectable } from "@angular/core";
import {NgxSpinnerService} from 'ngx-spinner';
import {share} from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  count = 0;


  constructor(private spinner: NgxSpinnerService) {
  }


  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = sessionStorage.getItem('token');

    if (token != null) {
      const headersConfig = {
        Authorization: 'Bearer ' + token
      };

      const cloned = req.clone({
        setHeaders: headersConfig
      });

      // using pipe(share()) to prevent multiple submissions per subscriber (observables are cold)
      // to find out more see https://blog.strongbrew.io/how-share()-can-reduce-network-requests/
      const observable = next.handle(cloned).pipe(share());
      observable.subscribe((data) => {
        // For future usage: if you want to intercept responses, this is the place :-)
        // console.log(data);
      }, (error) => {
        console.error('Auth-Interceptor error: ' + error);
      });

      return observable;
    } else {
      return next.handle(req);
    }
  }
}

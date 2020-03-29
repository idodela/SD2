import {HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";

export class AuthInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    console.log("Intercepted!", req);

    let token = sessionStorage.getItem('token');

    if(token == null) {
      token = localStorage.getItem('token');
      localStorage.setItem('token', token);
      return next.handle(req);
    }
    else {
      const cloned = req.clone({setHeaders:{Authorization: token }});
      // console.log(cloned);

      return next.handle(cloned)
    }
  }
}

import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthHttpInterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    if (sessionStorage.getItem('username') && sessionStorage.getItem('OAuthToken')) {
      req = req.clone(
        {   setHeaders: {
              Authorization: sessionStorage.getItem('OAuthToken')
            }
        }
      );
    }

    console.log('request intercepted');
    return next.handle(req);
  }

}

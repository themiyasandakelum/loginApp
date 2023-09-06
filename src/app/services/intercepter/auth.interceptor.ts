import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const token = localStorage.getItem('token');
    const companyId=localStorage.getItem('companyId')
    if (token) {
      request = request.clone({
        setHeaders: {
          'Authorization': `Bearer ${token || ""}`,
          'companyId':companyId || ""
        }
      });
    }
    return next.handle(request);
  }
}

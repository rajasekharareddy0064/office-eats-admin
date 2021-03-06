import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CommonInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const headers = request.headers
      .set('Client-Service', ' frontend-client')
      .set('Auth-Key', 'cmsrestapi')
      .set('Content-Type', 'application/json');
    const cloneReq = request.clone({ headers });
    return next.handle(cloneReq);
  }
}

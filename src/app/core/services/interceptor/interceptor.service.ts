import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { AuthService } from '../auth/auth.service';
import { Observable } from 'rxjs';


@Injectable()
export class InterceptorService implements HttpInterceptor {
  constructor(private authService:AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const headers = req.headers
      .set('x-access-token', this.authService.getToken());
    const authReq = req.clone({ headers });
    return next.handle(authReq);
  }
}

import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse } from '@angular/common/http';
import { AuthenticationServiceService } from './authentication-service.service';
import { SpinnerServiceService } from 'app/services/api/spinner-service.service';
import { tap } from 'rxjs/operators';

// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
export class JwtTokenInterceptorService implements HttpInterceptor {

  constructor(
    private authService: AuthenticationServiceService,
    private spinnerService: SpinnerServiceService
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    

    const currentUser = this.authService.getIdentity();
    const token = this.authService.getToken();

    if ( currentUser && token ) {

      

      request = request.clone( {
        setHeaders: {
          Authorization: `Bearer ${token}`,
          'Content-Type' : 'application/json; charset=utf-8',
          'Accept'       : 'application/json',
        }
      });
    }

    //return next.handle(request);
    
    /*return next.handle(request).pipe(
      catchError((err) => {
        if (err.status === 401) {
          this.authService.logout();
        }
        const error = err.error.message || err.statusText;
        return throwError(error);
      })
    );*/

    this.spinnerService.show();

    return next.handle(request)
      .pipe(
        tap(
          (event: HttpEvent<any>) => {
            if (event instanceof HttpResponse) {
              this.spinnerService.hide();
            }
          }, (error) => {
            this.spinnerService.hide();
          }
        )
      );
  }
}
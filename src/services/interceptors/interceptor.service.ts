import { HttpErrorResponse, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor{

  token: string | null;

  constructor(private router: Router) { 
    this.token = localStorage.getItem('token');
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const headers = new HttpHeaders({
      "Authorization": 'Bearer ' + this.token ,
    })

    const reqClone = req.clone({
      headers
    })

    return next.handle( reqClone ).pipe(
      catchError( this.manageError )
    );

  }

  manageError( error: HttpErrorResponse ){
    console.log('Error: ', error);
    if (error.status === 401){
      localStorage.clear()
      this.router.navigate(['/login'])
    }
    return throwError('Error personalizado')
  }

}

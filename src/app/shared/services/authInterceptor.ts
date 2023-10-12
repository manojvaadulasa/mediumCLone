import { PersistanceService } from "./persistance.service";
import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class authInterceptor implements HttpInterceptor{
  constructor(private persistanceService: PersistanceService){}
  intercept( request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
    const token = this.persistanceService.get('accessToken');
    request = request.clone({
      setHeaders : {
        Authorization : token ? `Token ${token}` : ''
      }
    });
    return next.handle(request);
  }
}

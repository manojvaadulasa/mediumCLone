import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegisterRequestInterface } from '../type/registerRequest.interface';
import { map, Observable } from 'rxjs';
import { CurrentUserInterface } from 'src/app/type/currentUser.interface';
import { AuthResponseInterface } from '../type/authResponse.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  public register(data: RegisterRequestInterface):Observable<CurrentUserInterface>{
    const url:string=environment.apiUrl+'/users';
    return this.http.post<AuthResponseInterface>(url,data).pipe(map(response=>response.user));
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../common/user';
import { Observable } from 'rxjs';
import { Userdto } from '../common/userdto';
import { Jwtclient } from '../common/jwtclient';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private apiUrl : string = 'http://localhost:8085/api/v1/security';

  constructor(private httpClient : HttpClient) { }


  register(user : User):Observable<User>{
    return this.httpClient.post<User>(this.apiUrl+"/register", user);
  }

  login(userDto:Userdto):Observable<Jwtclient>{
    return this.httpClient.post<Jwtclient>(this.apiUrl+"/login", userDto);

  }

}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  authenticate(username, password) {

    return this.http.post<JwtResponse>('/server/authenticate',{username, password}).pipe(
     map(
       userData => {
        sessionStorage.setItem('username',username);
        sessionStorage.setItem('OAuthToken', 'Bearer ' + userData.token);
        return userData;
       }
     )
    );
    
  }

  isAuthenticatedUser() {
    let username = sessionStorage.getItem('username');
    return (username !=null);
  }

  logout() {
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('OAuthToken');
  }

}

export class User {
  status: String
}

export class JwtResponse {
  token: String
}
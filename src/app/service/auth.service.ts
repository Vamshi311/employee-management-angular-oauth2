import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  authenticate(username, password) {

    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.http.get<User>('/server/employees/validateLogin',{headers}).pipe(
     map(
       userData => {
        sessionStorage.setItem('username',username);
        sessionStorage.setItem('basicAuth', 'Basic ' + btoa(username + ':' + password));
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
    sessionStorage.removeItem('basicAuth');
  }

}

export class User {
  status: String
}
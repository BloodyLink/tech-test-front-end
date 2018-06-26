import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders().set('Accept', 'application/json')
};

@Injectable()
export class LoginService {
  private url = 'http://dev.simplemoviles.com/api/login';
  constructor(private http: HttpClient) {}
  login(email: string, password: string): Observable<any> {
    return this.http
      .post<any>(this.url, { email: email, password: password }, httpOptions)
      .pipe(
        map(user => {
          if (user && user.token) {
            localStorage.setItem('currentUser', JSON.stringify(user));
          }

          return user;
        })
      );
  }
  logout() {
    localStorage.removeItem('currentUser');
  }
}

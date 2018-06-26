import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user';
import { Observable, of } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable()
export class UsersService {
  private url = 'http://localhost:8000/api/users';

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<any>(this.url);
  }

  getById(id: number) {
    return this.http.get(this.url + '/' + id);
  }

  getByEmail(email: string) {
    return this.http.get(this.url + email);
  }

  register(user: User) {
    return this.http.post<any>(this.url, user, httpOptions);
  }

  update(user: User) {
    return this.http.put(this.url + user.email, user);
  }

  delete(id: number) {
    return this.http.delete(this.url + id);
  }
}

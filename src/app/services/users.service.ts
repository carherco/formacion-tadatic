import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/User';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  urlApi = 'https://jsonplaceholder.typicode.com/users';
  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    const url = this.urlApi;
    return this.http.get<User[]>(url);
  }

  getUsersFilteredByEmail(email = ''): Observable<User[]> {
    let url = this.urlApi;
    if (email) {
      url += '?email=' + email;
    }
    return this.http.get<User[]>(url);
  }
}

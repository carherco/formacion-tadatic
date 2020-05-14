import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/User';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  urlApi = 'https://jsonplaceholder.typicode.com/users';
  urlApi2 = 'https://reqres.in/api/users';

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

  getUser(id: number): Observable<User> {
    const url = this.urlApi + '/' + id;
    return this.http.get<User>(url);
  }

  getUsersApi2(): Observable<any[]> {
    const url = this.urlApi2;
    return this.http.get<any>(url).pipe(
      (respuestaServer:any) => respuestaServer.data
    );
  }


      // "name": "Ervin Howell",
      // "username": "Antonette",
      // "email": "Shanna@melissa.tv",
      // "street": "Victor Plains",
      // "suite": "Suite 879",
      // "city": "Wisokyburgh",

  // {
  //   "id": 2,
  //   "name": "Ervin Howell",
  //   "username": "Antonette",
  //   "email": "Shanna@melissa.tv",
  //   "address": {
  //     "street": "Victor Plains",
  //     "suite": "Suite 879",
  //     "city": "Wisokyburgh",
  //     "zipcode": "90566-7771",
  //     "geo": {
  //       "lat": "-43.9509",
  //       "lng": "-34.4618"
  //     }
  //   },
  //   "phone": "010-692-6593 x09125",
  //   "website": "anastasia.net",
  //   "company": {
  //     "name": "Deckow-Crist",
  //     "catchPhrase": "Proactive didactic contingency",
  //     "bs": "synergize scalable supply-chains"
  //   }
  // }
}

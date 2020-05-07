import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { filter, debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { User } from 'src/app/model/User';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observables-search',
  templateUrl: './observables-search.page.html',
  styleUrls: ['./observables-search.page.scss'],
})
export class ObservablesSearchPage implements OnInit {

  urlApi = 'https://jsonplaceholder.typicode.com/users';
  searchEmailControl: FormControl;
  users: User[] = [];
  errorMessage = '';

  constructor(private http: HttpClient) {
    this.searchEmailControl = new FormControl();
    this.getUsers().subscribe(
      users => this.users = users
    );
  }

  ngOnInit() {
    this.searchEmailControl.valueChanges
      .subscribe(
        email => {
          this.getUsers(email).subscribe(
            users => this.users = users
          )
        }
      );
      // .pipe(
      //  //tap(x => console.log('Elemento original:', x)),
      //  filter(email => email.length > 3),
      //  //tap(x => console.log('Después de .filter(x => x.length > 3)', x)),
      //  debounceTime(500),
      //  //tap(x => console.log('Después de .debounceTime(500)', x)),
      //  distinctUntilChanged(),
      //  //tap(x => console.log('Después de .distinctUntilChanged()', x)),
      //  switchMap((email) => this.getUsers(email))
      //  //tap(x => console.log('Después de .switchMap((x) => this.getHeroes(x))', x))
      // )
      // .subscribe(users => {this.users = users; console.log(users)},
      //             error =>  this.errorMessage = error
      // );
  }

  getUsers(email = ''): Observable<User[]> {
    let url = this.urlApi;
    if (email) {
      url += '?email=' + email;
    }
    return this.http.get<User[]>(url);
  }

}

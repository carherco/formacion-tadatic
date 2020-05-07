import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { filter, debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { User } from 'src/app/model/User';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-observables-search',
  templateUrl: './observables-search.page.html',
  styleUrls: ['./observables-search.page.scss'],
})
export class ObservablesSearchPage implements OnInit {

  searchEmailControl: FormControl;
  users: User[] = [];
  errorMessage = '';

  constructor(private usersService: UsersService) {
    this.searchEmailControl = new FormControl();
    this.usersService.getUsers().subscribe(
      users => this.users = users
    );
  }

  ngOnInit() {
    this.searchEmailControl.valueChanges
      .subscribe(
        email => {
          this.usersService.getUsersFilteredByEmail(email).subscribe(
            users => this.users = users
          );
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
      //  switchMap((email) => this.getUsersFilteredByEmail(email))
      //  //tap(x => console.log('Después de .switchMap((x) => this.getHeroes(x))', x))
      // )
      // .subscribe(users => {this.users = users; console.log(users)},
      //             error =>  this.errorMessage = error
      // );
  }

}

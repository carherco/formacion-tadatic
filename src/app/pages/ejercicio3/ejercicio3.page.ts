import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-ejercicio3',
  templateUrl: './ejercicio3.page.html',
  styleUrls: ['./ejercicio3.page.scss'],
})
export class Ejercicio3Page implements OnInit {

  users: any[] = [];
  datosUsers$: Observable<any[]>;
  constructor(public usersService: UsersService, private http: HttpClient) {
    //this.getUsers();
  }

  ngOnInit() {
    this.datosUsers$ = this.usersService.getUsersApi2();
  }

  getUsers() {
    const url = 'https://reqres.in/api/users';
    this.http.get<any>(url).subscribe(
      respuestaServer => this.users = respuestaServer.data
    );
  }

}

// Listado de usuarios con datos de https://reqres.in/api/users
// No debes usar la función subscribe(), la suscripción debes realizarla
// directamente en el HTML con la pipe async


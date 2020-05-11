import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-ejercicio3',
  templateUrl: './ejercicio3.page.html',
  styleUrls: ['./ejercicio3.page.scss'],
})
export class Ejercicio3Page implements OnInit {

  usersService$: Observable<any[]>;

  constructor(private usersService: UsersService) { 
    this.usersService$ = this.usersService.getUsersApi2().pipe( map(response => response.data));
  }

  ngOnInit() {
  }

}

// Listado de usuarios con datos de https://reqres.in/api/users
// No debes usar la función subscribe(), la suscripción debes realizarla
// directamente en el HTML con la pipe async


import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';

@Component({
  selector: 'app-ejercicio1',
  templateUrl: './ejercicio1.page.html',
  styleUrls: ['./ejercicio1.page.scss'],
})
export class Ejercicio1Page implements OnInit {

  private datos = [1, 12, 'foo', 8, 5, 2, 'bar', 7, 18];

  constructor() { }

  ngOnInit() {
    from(this.datos).pipe(
      // Mediante operadores, calcula la suma
      // total de los valores numéricos

      // Ignora (filtra) los valores no numéricos

      // Debes mostrar la suma total en el HTML
    ).subscribe( /* ... */  )
  }

}

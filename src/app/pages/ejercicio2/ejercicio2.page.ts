import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { map, take, filter } from 'rxjs/operators';

@Component({
  selector: 'app-ejercicio2',
  templateUrl: './ejercicio2.page.html',
  styleUrls: ['./ejercicio2.page.scss'],
})
export class Ejercicio2Page implements OnInit {

  private inicio = 10;
  public cuenta;
  private suscripcion;

  public countdown$ = interval(500).pipe(
        // Usa aquí los operadores necesarios
        // para realizar la cuenta atrás comenzando 
        // desde  el valor indicado en this.inicio

        // Extra: Que la cuenta atrás se pare en 0

        map( item => this.inicio - item),
        //filter( item => item >= 0)
        take( this.inicio + 1)
  );

  constructor() { 

    this.suscripcion = this.countdown$.subscribe(
      dato => this.cuenta = dato
    );
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.suscripcion.unsuscribe();
  }

}

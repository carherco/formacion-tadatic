import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-ejercicio2',
  templateUrl: './ejercicio2.page.html',
  styleUrls: ['./ejercicio2.page.scss'],
})
export class Ejercicio2Page implements OnInit {

  private inicio = 10;
  public countdown$ = interval(700).pipe(
        // Usa aquí los operadores necesarios
        // para realizar la cuenta atrás comenzando 
        // desde  el valor indicado en this.inicio

        // Extra: Que la cuenta atrás se pare en 0
  );
  constructor() { }

  ngOnInit() {
  }

}
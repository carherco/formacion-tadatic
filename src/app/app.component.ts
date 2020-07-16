import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { ShoppingCartService } from './services/shopping-cart.service';
import { Product } from './model/product';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Workspace',
      url: '/workspace',
      icon: 'archive'
    },
    {
      title: 'Observables',
      url: '/observables',
      icon: 'mail'
    },
    {
      title: 'Observables-search',
      url: '/observables-search',
      icon: 'paper-plane'
    },
    {
      title: 'Formularios Reactivos',
      url: '/form-reactive',
      icon: 'warning'
    },
    {
      title: 'Tienda',
      url: '/catalog',
      icon: 'archive'
    },
    {
      title: 'Card',
      url: '/card',
      icon: 'archive'
    },
    {
      title: 'Popover',
      url: '/popover',
      icon: 'archive'
    },
    {
      title: 'Validadores',
      url: '/validators',
      icon: 'archive'
    },
    {
      title: 'IndexedDB',
      url: '/indexed-db',
      icon: 'archive'
    },
    {
      title: 'Profile',
      url: '/edit-profile',
      icon: 'archive'
    },
  ];

  public ejercicios = [
    {
      title: 'Ejercicio 1',
      url: '/ejercicio1',
      icon: 'archive'
    },
    {
      title: 'Ejercicio 2',
      url: '/ejercicio2',
      icon: 'archive'
    },
    {
      title: 'Ejercicio 3',
      url: '/ejercicio3',
      icon: 'archive'
    },
    {
      title: 'Ejercicio 4',
      url: '/ejercicio4',
      icon: 'archive'
    },
    {
      title: 'Ejercicio 5',
      url: '/ejercicio5',
      icon: 'archive'
    },
    {
      title: 'Ejercicio 6',
      url: '/ejercicio6',
      icon: 'archive'
    },
    {
      title: 'Ejercicio 7',
      url: '/ejercicio7',
      icon: 'archive'
    },
  ];

  numItems: number;
  total: number;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private shoppinCartService: ShoppingCartService,
    private auth: AuthService
  ) {
    this.initializeApp();

    this.shoppinCartService.getNumItems$().subscribe(
      nuevoNumero => this.numItems = nuevoNumero
    );

    this.shoppinCartService.getTotal$().subscribe(
      nuevoPrecio => this.total = nuevoPrecio
    );
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {

  }

  getUsername(): string {
    return this.auth.getUsername();
  }
}

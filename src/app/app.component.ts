import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { ShoppingCartService } from './services/shopping-cart.service';
import { Product } from './model/product';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
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
      title: 'Ejercicio 1',
      url: '/ejercicio1',
      icon: 'heart'
    },
    {
      title: 'Ejercicio 2',
      url: '/ejercicio2',
      icon: 'archive'
    },
    {
      title: 'Ejercicio 3',
      url: '/ejercicio3',
      icon: 'trash'
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
    }
  ];

  numItems: number;
  total: number;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private shoppinCartService: ShoppingCartService
  ) {
    this.initializeApp();
    this.numItems = this.shoppinCartService.getNumItems();
    this.total = this.shoppinCartService.getTotal();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {

  }

  ngDoCheck() {
    
  }
}

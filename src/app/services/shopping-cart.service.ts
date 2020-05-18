import { Injectable } from '@angular/core';
import { Product } from '../model/product';
import { Observable, Subject, BehaviorSubject } from 'rxjs';

const Catalog: Product[] = [
  { id: 7923, name: 'Router Wifi', price: 59.45 },
  { id: 2345, name: 'IRobot', price: 279.80 },
  { id: 5419, name: 'Xiamoi H20', price: 122.30 },
];

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  private cart: Product[] = [];
  private numItems$: BehaviorSubject<number> = new BehaviorSubject(0);
  private totalPrice$: BehaviorSubject<number> = new BehaviorSubject(0);

  constructor() { }

  getCatalog(): Product[] {
    return Catalog;
  }

  addProduct(product: Product) {
    this.cart.push(product);
    console.table(this.cart);
    this.numItems$.next(this.cart.length);
    this.totalPrice$.next(this.getTotal());
  }

  removeProduct() {

  }

  getCart(): Product[] {
    return this.cart;
  }

  getNumItems(): number {
    console.log('Llamada a ShoppingCartService.getNumItems');
    return this.cart.length;
  }

  getNumItems$(): Observable<number> {
    return this.numItems$.asObservable();
  }

  getTotal(): number {
    console.log('Llamada a ShoppingCartService.getTotal');
    return this.cart.reduce( (total, item) => total + item.price, 0);
  }

  getTotal$(): Observable<number> {
    return this.totalPrice$.asObservable();
  }

}

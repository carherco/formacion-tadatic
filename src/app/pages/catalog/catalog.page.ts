import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.page.html',
  styleUrls: ['./catalog.page.scss'],
})
export class CatalogPage implements OnInit {

  catalog: Product[];
  constructor(private shoppinCartService: ShoppingCartService) { 
    this.catalog = this.shoppinCartService.getCatalog();
  }

  ngOnInit() {
  }

  add(product) {
    this.shoppinCartService.addProduct(product);
  }

}

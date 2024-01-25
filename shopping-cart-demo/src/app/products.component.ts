import { Component } from '@angular/core';
import { ShoppingdataService } from './shoppingdata.service';
import {MatGridListModule} from '@angular/material/grid-list';

import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { Product } from './domains';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-products',
  standalone: true,
  imports: [MatGridListModule, MatCardModule, MatButtonModule, RouterModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  products ?: Array<Product>

  constructor(
    private service : ShoppingdataService
  ) {

  }

  ngOnInit() {
    this.products = this.service.fakeProducts()
  }

  addToCart(product: Product) {
    this.service.addToCart(product)
  }

}

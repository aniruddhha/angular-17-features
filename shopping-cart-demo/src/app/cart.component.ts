import { Component } from '@angular/core';
import { ShoppingdataService } from './shoppingdata.service';
import {MatListModule} from '@angular/material/list';
import { Product } from './domains';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [MatListModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

  cart ?: Array<Product>

  constructor(
    private service: ShoppingdataService
  ) {

  }

  ngOnInit() {
    this.cart = this.service.getCartItems()
    console.log(this.service.getCartItems())
  }

  getTotal() {
    return this.cart?.reduce((total, product) => total + product.price, 0);
  }

  removeFromCart(product: Product) {
    this.service.removeItem(product)
    this.cart = this.service.getCartItems()
  }
}

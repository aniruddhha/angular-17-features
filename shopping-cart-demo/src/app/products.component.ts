import { Component } from '@angular/core';
import { ShoppingdataService } from './shoppingdata.service';
import {MatGridListModule} from '@angular/material/grid-list';

import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { Product } from './domains';
import { RouterModule } from '@angular/router';

import {PageEvent, MatPaginatorModule} from '@angular/material/paginator';


@Component({
  selector: 'app-products',
  standalone: true,
  imports: [MatGridListModule, MatCardModule, MatButtonModule, RouterModule, MatPaginatorModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  products ?: Array<Product>
  length = 50;
  pageSize = 5;
  pageIndex = 0;
  pageSizeOptions = [5, 10, 25];

  hidePageSize = false;
  showPageSizeOptions = true;
  showFirstLastButtons = true;
  disabled = false;

  constructor(
    private service : ShoppingdataService
  ) {

  }

  ngOnInit() {
    this.products = this.service.fakeProducts()
    this.length = this.service.prods.length
  }

  addToCart(product: Product) {
    this.service.addToCart(product)
  }

  handlePageEvent(e: PageEvent) {
   console.log(e)

   this.products = this.service.fakeProducts(e.pageIndex, 5)
  }

}

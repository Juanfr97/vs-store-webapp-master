import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';

import { ProductsService } from './../../../core/services/products/products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  products = [];
  displayedColumns: string[] = ['Id','description', 'price', 'image', 'actions','category'];

  constructor(
    private productsService: ProductsService,
    private snackbar: MatSnackBar
  ) { }

  ngOnInit() {
    this.fetchProducts();
  }

  fetchProducts() {
    this.productsService.getAllProducts()
    .subscribe(response => {
      this.products = response.products;
    });
  }

  deleteProduct(id: string) {
    this.productsService.deleteProduct(id)
    .subscribe(rta => {
      console.log(rta);
      this.fetchProducts();
    },error=>{
      this.snackbar.open(error, null, { duration: 1500 })
      console.log(error);
    });
  }

}

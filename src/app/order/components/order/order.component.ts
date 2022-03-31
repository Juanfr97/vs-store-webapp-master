import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { IPayPalConfig, ICreateOrderRequest,IPurchaseUnit } from 'ngx-paypal';
import { Observable } from 'rxjs';
import { Sell } from 'src/app/core/models/Sell';
import { SellsService } from 'src/app/core/services/sells/sells.service';
import { GroupProductsPipe } from 'src/app/shared/pipes/group/group-products.pipe';
import { ProductTotalPipe } from 'src/app/shared/pipes/product-total/product-total.pipe';

import { Product } from '../../../core/models/Product';
import { CartService } from './../../../core/services/cart/cart.service';
declare var paypal


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
];

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'total'];
  dataSource = ELEMENT_DATA;

  products$: Observable<Product[]>;
  paidFor = false;
  showSuccess=false
  showCancel=false
  showError=false
  total=0.01
  sell={
    total:0,
    user:'',
    key:''
  }
  constructor(
    private cartService: CartService,private groupProducts:GroupProductsPipe,
    private sellService:SellsService,private router:Router
  ) {
    this.products$ = this.cartService.cart$;
    
  }

  ngOnInit() {
   
    this.products$ = this.cartService.cart$;
  }

   
}



  



import { Component, OnInit } from '@angular/core';

import { map } from 'rxjs/operators';

import { CartService } from './../../../core/services/cart/cart.service';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  total$: Observable<number>;

  constructor(
    private cartService: CartService,
    private authService:AuthService
  ) {
    this.total$ = this.cartService.cart$
    .pipe(
      map(products => products.length)
    );
  }

  ngOnInit() {
  }

  isLogged(){
    
  }

  isUser(){
    
  }
}

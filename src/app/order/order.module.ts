import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { OrderComponent } from './components/order/order.component';

import { MaterialModule } from './../material/material.module';
import { SharedModule } from './../shared/shared.module';
import { NgxPayPalModule } from 'ngx-paypal';
import { ProductTotalPipe } from '../shared/pipes/product-total/product-total.pipe';
import { GroupProductsPipe } from '../shared/pipes/group/group-products.pipe';
import { SuccessComponent } from './components/success/success.component';
import { FailComponent } from './components/fail/fail.component';

@NgModule({
  declarations: [OrderComponent, SuccessComponent, FailComponent],
  imports: [
    CommonModule,
    OrderRoutingModule,
    SharedModule,
    MaterialModule,
  NgxPayPalModule
   
  ],
  providers:[GroupProductsPipe]
})
export class OrderModule { }

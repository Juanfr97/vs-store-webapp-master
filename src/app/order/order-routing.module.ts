import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FailComponent } from './components/fail/fail.component';

import { OrderComponent } from './components/order/order.component';
import { SuccessComponent } from './components/success/success.component';

const routes: Routes = [
  {
    path: '',
    component: OrderComponent
  },
  {
    path:'success',
    component:SuccessComponent
  },
  {
    path:'fail',
    component:FailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }

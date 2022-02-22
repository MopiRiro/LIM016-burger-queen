import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlaceOrderComponent } from './place-order/place-order.component';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [
  {
    path:'',
    component: PlaceOrderComponent
  },
  {
    path:'',
    component: ProductListComponent
  }
];

@NgModule({ imports: [RouterModule.forChild(routes)], exports: [RouterModule], })
export class WaiterviewRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WaiterviewRoutingModule } from './waiterview-routing.module';
import { PlaceOrderComponent } from './place-order/place-order.component';
import { ProductListComponent } from './product-list/product-list.component';



@NgModule({
  declarations: [
    PlaceOrderComponent,
    ProductListComponent
  ],
  imports: [
    CommonModule,
    WaiterviewRoutingModule
  ]
})
export class WaiterviewModule { }

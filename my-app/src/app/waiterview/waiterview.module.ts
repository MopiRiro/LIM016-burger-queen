import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WaiterMainviewComponent} from './waiter-mainview/waiter-mainview.component';
import { WaiterviewRoutingModule } from './waiterview-routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import { PlaceOrderComponent } from './place-order/place-order.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    WaiterMainviewComponent,
    ProductListComponent,
    PlaceOrderComponent
  ],
  imports: [
    CommonModule,
    WaiterviewRoutingModule,
    FontAwesomeModule
  ]
})
export class WaiterviewModule { }

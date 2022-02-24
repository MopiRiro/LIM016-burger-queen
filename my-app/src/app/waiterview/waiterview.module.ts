import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WaiterMainviewComponent} from './waiter-mainview/waiter-mainview.component';
import { WaiterviewRoutingModule } from './waiterview-routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import { PlaceOrderComponent } from './place-order/place-order.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MenuTypesComponent } from './menu-types/menu-types.component';


@NgModule({
  declarations: [
    WaiterMainviewComponent,
    ProductListComponent,
    PlaceOrderComponent,
    MenuTypesComponent
  ],
  imports: [
    CommonModule,
    WaiterviewRoutingModule,
    FontAwesomeModule
  ]
})
export class WaiterviewModule { }

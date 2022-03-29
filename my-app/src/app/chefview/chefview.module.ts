import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChefviewRoutingModule } from './chefview-routing.module';
// import { NavbarComponent } from '../navbar/navbar.component';
import { OrderStatusComponent } from './orderStatus/order-status.component';
import { SharedModule } from '../shared/shared.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PipeOrderStatusPipe } from '../pipes/pipe-order-status.pipe';
import { OrderReadyComponent } from './orderReady/order-ready.component';
import { AllOrdersComponent } from './all-orders/all-orders.component';
import { OrderDeliveredComponent } from './order-delivered/order-delivered.component';

@NgModule({
  declarations: [
    // NavbarComponent,
    OrderStatusComponent,
    PipeOrderStatusPipe,
    OrderReadyComponent,
    AllOrdersComponent,
    OrderDeliveredComponent
    
  ],
  imports: [
    CommonModule,
    ChefviewRoutingModule,
    SharedModule,
    FontAwesomeModule,
    

  ]
})
export class ChefviewModule { }

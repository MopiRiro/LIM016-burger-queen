import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChefviewRoutingModule } from './chefview-routing.module';
// import { NavbarComponent } from '../navbar/navbar.component';
import { OrderStatusComponent } from './orderStatus/order-status.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    // NavbarComponent,
    OrderStatusComponent,
  ],
  imports: [
    CommonModule,
    ChefviewRoutingModule,
    SharedModule
  ]
})
export class ChefviewModule { }

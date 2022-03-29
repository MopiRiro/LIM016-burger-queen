import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllOrdersComponent } from './all-orders/all-orders.component';
import { OrderDeliveredComponent } from './order-delivered/order-delivered.component';
import { OrderReadyComponent } from './orderReady/order-ready.component';
import { OrderStatusComponent } from './orderStatus/order-status.component';

const routes: Routes = [
  {
    path:'',
    component: OrderStatusComponent,
    children: [
      {
        path: 'ready',
        component: OrderReadyComponent
      },
      {
        path: 'allOrders',
        component: AllOrdersComponent
      },
      {
        path: 'delivered',
        component: OrderDeliveredComponent
      },
    ]
  }
];

@NgModule({ imports: [RouterModule.forChild(routes)], exports: [RouterModule], })
export class ChefviewRoutingModule { }

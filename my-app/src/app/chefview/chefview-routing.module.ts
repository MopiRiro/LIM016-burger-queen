import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { NavbarComponent } from '../navbar/navbar.component';
import { OrderStatusComponent } from './orderStatus/order-status.component';
/* import { NavbarComponent } from './chefview/navbar/navbar.component'; */

const routes: Routes = [
  {
    path:'',
    component: OrderStatusComponent
  }
];

@NgModule({ imports: [RouterModule.forChild(routes)], exports: [RouterModule], })
export class ChefviewRoutingModule { }

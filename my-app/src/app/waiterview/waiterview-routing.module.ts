import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WaiterMainviewComponent } from './waiter-mainview/waiter-mainview.component'

const routes: Routes = [
  {
    path:'',
    component: WaiterMainviewComponent
  }
];

@NgModule({ imports: [RouterModule.forChild(routes)], exports: [RouterModule], })
export class WaiterviewRoutingModule { }

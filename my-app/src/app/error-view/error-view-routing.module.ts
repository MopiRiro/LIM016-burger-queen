import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorViewComponent } from './error-view/error-view.component';

const routes: Routes = [
  {
    path:'',
    component: ErrorViewComponent
  }
];

@NgModule({ imports: [RouterModule.forChild(routes)], exports: [RouterModule], })
export class ErrorViewRoutingModule { }

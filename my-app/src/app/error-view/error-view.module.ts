import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorViewComponent } from './error-view/error-view.component';
import { ErrorViewRoutingModule } from './error-view-routing.module';



@NgModule({
  declarations: [
    ErrorViewComponent
  ],
  imports: [
    CommonModule,
    ErrorViewRoutingModule
  ]
})
export class ErrorViewModule { }

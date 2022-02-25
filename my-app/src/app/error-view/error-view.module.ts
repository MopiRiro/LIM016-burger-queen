import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorViewComponent } from './error-view/error-view.component';
import { ErrorViewRoutingModule } from './error-view-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    ErrorViewComponent
  ],
  imports: [
    CommonModule,
    ErrorViewRoutingModule,
    FontAwesomeModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class ErrorViewModule { }

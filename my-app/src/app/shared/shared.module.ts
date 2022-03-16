import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardProductComponent } from './card-product/card-product.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CardOrderComponent } from './card-order/card-order.component';


@NgModule({
  declarations: [
    CardProductComponent,
    CardOrderComponent,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
  ],
  exports: [
    CardProductComponent,
    CardOrderComponent,
  ]
})
export class SharedModule { }


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardProductComponent } from './card-product/card-product.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    CardProductComponent,
    ShoppingListComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
  ],
  exports: [
    CardProductComponent,
    ShoppingListComponent
  ]
})
export class SharedModule { }


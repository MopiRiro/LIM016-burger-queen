import { ShoppinngCarService } from './../../services/shoppinng-car.service';
import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.scss']
})

export class CardProductComponent implements OnInit {
  @Input() data!: any;


  constructor(private shoppingCarService: ShoppinngCarService) { }

  ngOnInit(): void {
  }

  addProduct(){
    this.shoppingCarService.disparadorShoppinngCar.emit({
      data:this.data
    })
  }
}

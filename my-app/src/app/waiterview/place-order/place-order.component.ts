import { Component, OnInit } from '@angular/core';
import { faCoffee, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.scss']
})
export class PlaceOrderComponent implements OnInit {
  faCoffee = faCoffee;
  faTrash = faTrashAlt;

  clientName:any = "";
  cant:number = 0;
  price:number = 0;
  productList:any = [
    {
      item: "Product1",
      price: 23
    }, {
      item: "Product2",
      price: 20
    }, {
      item: "Product3",
      price: 34
    }
  ];
  subTotal:number = 0;
  igv:number = this.subTotal*18/100;
  total:number = this.subTotal + this.igv;

  constructor() { }

  ngOnInit(): void {
    console.log(this.productList.item)
  }

  addCnt(){
    this.cant += 1;
  }

  subtractCnt(){
    this.cant -= 1;
  }

  sendOrder(){
    console.log(this.clientName);
    console.log(this.cant);
    this.clientName = "";
    this.cant = 0;
  }

  cancelOrder(){
    this.clientName = "";
    this.cant = 0;
  }
}

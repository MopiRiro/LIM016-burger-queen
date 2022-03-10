import { Component, OnInit } from '@angular/core';
import { ShoppinngCarService } from 'src/app/services/shoppinng-car.service';
import { faCoffee, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.scss']
})
export class PlaceOrderComponent implements OnInit {
  faCoffee = faCoffee;
  faTrash = faTrashAlt;

  public orderList:Array<any> = []

  clientName:any = "";
  cant:number = 0;
  price:number = 0;
  base: number = 1;

  subTotal:number = 0;
  igv:number = this.subTotal*18/100;
  total:number = this.subTotal + this.igv;

  constructor(private shoppingCarService: ShoppinngCarService) { }

  ngOnInit(): void {
    this.shoppingCarService.disparadorShoppinngCar.subscribe(data => {console.log('Recibiendo data: ', data);
    this.orderList.push({data, amount: 1});
  })
  }

  changeAmount(base:number, item:any){
    if (item.amount && item.amount+base === 0){
      this.deleteItem(item);
    }else{
      item.amount = item.amount + base
      //this.totalPrice();
    }
  }

  deleteItem(item:any){
    const index = this.orderList.indexOf(item);
    if(index > -1){
      this.orderList.splice(index,1);
      //this.totalPrice();
    }
    console.log(this.orderList);
    //return this.orderList;
  }

  sendOrder(){
    console.log(this.clientName);
    console.log(this.cant);
    this.clientName = "";
    this.cant = 0;
  }

  cancelOrder(){
    this.clientName = "";
    this.orderList = [];
    this.cant = 0;
  }
}

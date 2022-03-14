import { createNgModuleType } from '@angular/compiler/src/render3/r3_module_compiler';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service'
import { GetOrderStatusService } from '../../services/get-order-status.service';

@Component({
  selector: 'app-order-status',
  templateUrl: './order-status.component.html',
  styleUrls: ['./order-status.component.scss']
})
export class OrderStatusComponent implements OnInit {

  public dataUser: any;
  roleChef: boolean = false;
  roleWaiter: boolean = false;

  orders: Array<any> = [];

  constructor( private dataService: DataService, private getOrderStatusService: GetOrderStatusService) { }

  ngOnInit(): void {
    this.dataUser = this.dataService.disparador.getValue();
    console.log("este es el usuario en order-place: ", this.dataUser);
    this.roleWaiter = this.dataUser.rol == 'waiter' ? true : false;
    this.roleChef = this.dataUser.rol == 'chef' ? true : false;

    console.log('hola');

    //? Recibir órdenes del servicio
    this.getOrderStatusService.disparadorGetOrderStatus.subscribe(orderSaved => {
      this.orders.concat(orderSaved);
      console.log(this.orders)
    })
  }

}

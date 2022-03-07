import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service'
@Component({
  selector: 'app-order-status',
  templateUrl: './order-status.component.html',
  styleUrls: ['./order-status.component.scss']
})
export class OrderStatusComponent implements OnInit {

  public dataUser: any;
  roleChef: boolean = false;
  roleWaiter: boolean = false;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataUser = this.dataService.disparador.getValue();
    console.log("este es el usuario en order-place: ", this.dataUser);
    this.roleWaiter = this.dataUser.rol == 'waiter' ? true : false;
    this.roleChef = this.dataUser.rol == 'chef' ? true : false;
  }

}

import { createNgModuleType } from '@angular/compiler/src/render3/r3_module_compiler';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service'
import { FirestoreService } from '../../services/firestore.service';

@Component({
  selector: 'app-order-status',
  templateUrl: './order-status.component.html',
  styleUrls: ['./order-status.component.scss']
})
export class OrderStatusComponent implements OnInit {
  public listOrders: any[] = [];
  public dataUser: any;
  roleChef: boolean = false;
  roleWaiter: boolean = false;

  orders: any [] =[];

  time:any= "00:00:00";
  runningTime:any = 0;
  timeInterval:any;

  id:string = '';

  constructor(private dataService: DataService, private firestoreService: FirestoreService ) {

  }

  ngOnInit(): void {
    this.dataUser = this.dataService.disparador.getValue();
    // console.log("este es el usuario en order-place: ", this.dataUser);
    this.roleWaiter = this.dataUser.rol == 'waiter' ? true : false;
    this.roleChef = this.dataUser.rol == 'chef' ? true : false;

    this.getOrder();

  }

  getOrder(){
    this.firestoreService.getOrder().subscribe(data => {
      // this.orders = [];
      data.forEach((item) => {
        this.listOrders.push({
          id: item.payload.doc.id,
          data: item.payload.doc.data()
        });
      });
    
    const arraySortDate:any = [];
    this.listOrders.forEach((e:any) => {
      e.data.date.forEach((item:any)=>{
      console.log(item.monthDateYear);
      arraySortDate.push(item.monthDateYear);
      const sorted = arraySortDate.sort((a:any, b:any) => {
        const newA = a.split('/').reverse().join('-')
        const newB = b.split('/').reverse().join('-');
        return +new Date(newA) - +new Date(newB)
      })
      console.log(sorted);
      })
    });

    // console.log(arraySortDate);
    })
  }

  

}

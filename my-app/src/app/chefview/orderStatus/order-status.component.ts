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
      data.forEach((item) => {
        this.listOrders.push({
          id: item.payload.doc.id,
          data: item.payload.doc.data()
        });
      });

    this.listOrders.sort((a:any,b:any) =>{
      console.log(a.data.date[0].monthDateYear);
      const newA = a.data.date[0].monthDateYear.split('/').reverse().join('-')
      const newB = b.data.date[0].monthDateYear.split('/').reverse().join('-');
      if(newA == newB){
        return a.data.date[0].hourMinutes.localeCompare(b.data.date[0].hourMinutes)
      }
      return +new Date(newA) - +new Date(newB)
    })

    })
  }

}

import { createNgModuleType } from '@angular/compiler/src/render3/r3_module_compiler';
import { Component, OnInit } from '@angular/core';
import { faAddressBook, faCheckCircle, faClock, faMemory, faNotEqual, faNotesMedical, faNoteSticky, faThList, faTruck, faUserClock } from '@fortawesome/free-solid-svg-icons';
import { FirestoreService } from '../../services/firestore.service';
import { PipeOrderStatusPipe } from '../../pipes/pipe-order-status.pipe';


@Component({
  selector: 'app-order-status',
  templateUrl: './order-status.component.html',
  styleUrls: ['./order-status.component.scss']
})
export class OrderStatusComponent implements OnInit {
  public listOrders: any[] = [];
  public dataUser: any;
  public listOrdersDelivered: any[] =[];
  public listOrdersReady: any[] =[];
  roleChef: boolean = false;
  roleWaiter: boolean = false;

  orders: any [] =[];

  time:any= "00:00:00";
  runningTime:any = 0;
  timeInterval:any;

  id:string = '';

  faAllOrders = faThList;
  faOrdersReady = faUserClock;
  faOrdersDelivered = faCheckCircle;

  constructor(private firestoreService: FirestoreService ) {}

  ngOnInit(): void {
    this.getOrder();

  }

  getOrder(){
    this.firestoreService.getOrder().subscribe(data => {
      this.listOrders = [];
      data.forEach((item) => {
        this.listOrders.push({
          id: item.payload.doc.id,
          data: item.payload.doc.data()
        });
      });
      this.sortOrders(this.listOrders);
    })
  }

  sortOrders(arr:any) {
    arr.sort((a:any,b:any) =>{
      const newA = a.data.date[0].monthDateYear.split('/').reverse().join('-')
      const newB = b.data.date[0].monthDateYear.split('/').reverse().join('-');
      if(newA == newB){
        return b.data.date[0].hourMinutes.localeCompare(a.data.date[0].hourMinutes);
      } else {
        return +new Date(newB) - +new Date(newA)
      }
    })
  }

}

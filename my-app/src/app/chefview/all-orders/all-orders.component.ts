import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-all-orders',
  templateUrl: './all-orders.component.html',
  styleUrls: ['./all-orders.component.scss']
})
export class AllOrdersComponent implements OnInit {

  constructor(private firestoreService: FirestoreService) { }
  public listOrders: any[] = [];
  
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

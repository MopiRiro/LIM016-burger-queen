import { Component, OnInit } from '@angular/core';
import { ShoppinngCarService } from 'src/app/services/shoppinng-car.service';
import { faCoffee, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.scss']
})
export class PlaceOrderComponent implements OnInit {

  faCoffee = faCoffee;
  faTrash = faTrashAlt;

  public orderList:Array<any> = []

  clientName:string = "";
  tableNumber:string = "";
  price:number = 0;
  base: number = 1;

  subTotal:number = 0;
  igv:number = 0;
  total:number = 0;

  constructor(private shoppingCarService: ShoppinngCarService) { }

  ngOnInit(): void {
    this.shoppingCarService.disparadorShoppinngCar.subscribe(data => {console.log('Recibiendo data: ', data);
    this.orderList.push({data, amount: 1});
    this.totalPrice();
  });
  }

  changeAmount(base:number, item:any){
    if (item.amount && item.amount+base === 0){
      this.deleteItem(item);
    }else{
      item.amount = item.amount + base
      this.totalPrice();
    }
  }

  deleteItem(item:any){
    const index = this.orderList.indexOf(item);
    if(index > -1){
      this.orderList.splice(index,1);
      this.totalPrice();
    }
    console.log(this.orderList);
    //return this.orderList;
  }

  totalPrice() {
    if(this.orderList.length === 0){
      this.subTotal = 0;
    } else {
      this.subTotal = this.orderList.map((item)=>item.data.data.precio*item.amount)
      .reduce((acc,item) => acc += item);
      this.igv = this.subTotal*18/100;
      this.total = this.subTotal + this.igv;
      console.log(this.subTotal);
    }
  }

  sendOrder(){
    const Toast = Swal.mixin({
      toast: true,
      position: 'center',
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })
    Toast.fire({
      icon: 'success',
      title: 'Registered Order'
    })
    console.log(this.clientName);
    console.log(this.base);
    this.clientName = "";
    this.tableNumber = "";
    this.orderList = [];
    this.subTotal = 0;
    this.igv = 0;
    this.total = 0;
  }

  cancelOrder(){
    let clean  = () => {
      this.clientName = "";
      this.tableNumber = "";
      this.orderList = [];
      this.base = 0;
      this.subTotal = 0;
      this.igv = 0;
      this. total = 0
    }

    Swal.fire({
      icon: 'warning',
      iconColor:'#94d154',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      confirmButtonColor:'#94d154',
      focusCancel:true,
      title: 'Do you want to cancel the order?',
      text: 'You will lose all registered products!',
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire({
          text:'Canceled Order!',
          icon: 'success',
          confirmButtonColor:'#94d154'
        }).then(clean)
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })

  }
}
//fechaCreacion: new Date
//fechaTerminada: new Date

import { Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../../services/data.service';
import { FirestoreService } from '../../services/firestore.service';


@Component({
  selector: 'app-card-order',
  templateUrl: './card-order.component.html',
  styleUrls: ['./card-order.component.scss']
})
export class CardOrderComponent implements OnInit {
  @Input() orders!: any;

  public dataUser: any;
  roleChef: boolean = false;
  roleWaiter: boolean = false;

  time:any= "00:00";
  runningTime:any = 0;
  timeInterval:any;
  startTime:any;



  constructor(private dataService: DataService, private firestoreService: FirestoreService, private router: Router) { }

  ngOnInit(): void {
    this.dataUser = this.dataService.disparador.getValue();
    // console.log("este es el usuario en order-place: ", this.dataUser);
    this.roleWaiter = this.dataUser.rol == 'waiter' ? true : false;
    this.roleChef = this.dataUser.rol == 'chef' ? true : false;
    console.log(this.orders.data.startTime);
    console.log(this.orders.data.status);
  }

  orderStatus($event:any){
    console.log($event.target.value);
    if($event.target.value == 'Accepted'){
      this.startTime = Date.now();
      this.start()
      this.firestoreService.updateStatus(this.orders.id,$event.target.value);
      //* Guardar startTime en FS
    } else if ($event.target.value == 'Ready'){
      this.pause()
    } else {
      this.time = "00:00"
    }
  }

  start(){
    const btn = document.querySelector('select');
    // console.log(btn)
    // console.log(this.startTime);
    this.timeInterval = setInterval(() => {
      this.runningTime = Date.now() - this.startTime;
      this.time = this.calculateTime(this.runningTime);
    }, 1000)
  }

  calculateTime(x:any){
    const totalSeconds = Math.floor(x / 1000);
    const totalMinutes = Math.floor(totalSeconds / 60);

    const displaySeconds = (totalSeconds % 60).toString().padStart(2, "0");
    const displayMinutes = totalMinutes.toString().padStart(2, "0")

    return `${displayMinutes}:${displaySeconds}`
  }

  pause(){
    clearInterval(this.timeInterval)
  }



}

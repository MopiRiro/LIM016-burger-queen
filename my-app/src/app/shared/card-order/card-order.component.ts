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
    this.roleWaiter = this.dataUser.rol == 'waiter' ? true : false;
    this.roleChef = this.dataUser.rol == 'chef' ? true : false;

    /* const select = document.querySelector('select');
    console.log(select);
    if (select !== null && select.value == 'Accepted') {
      select.style.backgroundColor = "#ffbbae"
    } */
    this.showTime();
  }

  showTime() {
    const select = document.querySelector('select');
    if (select !== null) {
      if (select.value == 'Accepted') {
        this.startTime = this.orders.data.startTime;
        this.start(this.startTime)
      } else if (select.value == 'Ready') {
        console.log("este select está listo");
        //this.pause();
        this.time = this.orders.data.readyTime;
      }
    } else if (select == null) {
      console.log("Es nulo");;
    } else {
      console.log("No está entrando")
    }
  }

  orderStatus($event: any){
    console.log($event.target.value);
    if($event.target.value == 'Accepted'){
      console.log("Accepted the select");
      this.startTime = Date.now();
      this.firestoreService.updateStatus(this.orders.id, $event.target.value, this.startTime);
    } else if ($event.target.value == 'Ready'){
      //! Bloquear el select
      console.log("pausando");
      this.stop();
      this.firestoreService.updateStatus(this.orders.id, $event.target.value, this.startTime);
      this.firestoreService.sendReadyTime(this.orders.id, this.time);
      this.time = this.orders.data.readyTime;
    } else {
      this.time = "00:00"
    }
  }

  start(orderStartTime: number){
    this.timeInterval = setInterval(() => {
      this.runningTime = Date.now() - orderStartTime;
      this.time = this.calculateTime(this.runningTime);
    }, 1000)
  }

  calculateTime(x:any){
    const totalSeconds = Math.floor(x / 1000);
    const totalMinutes = Math.floor(totalSeconds / 60);
    const totalHours = Math.floor(totalMinutes / 60);

    const displaySeconds = (totalSeconds % 60).toString().padStart(2, "0");
    const displayMinutes = (totalMinutes & 60).toString().padStart(2, "0");
    const displayHours = totalHours.toString().padStart(2, "0");

    return `${displayHours}:${displayMinutes}:${displaySeconds}`
  }

  stop(){
    this.time = this.orders.data.readyTime;
    console.log(this.timeInterval)
  }

}


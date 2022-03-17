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

  constructor(private dataService: DataService, private firestoreService: FirestoreService) { }

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
    //? if startTime = 0 Date.now()
    //? else startTime jalar el campo del documento
    if($event.target.value == 'Acepted'){
      this.start()
      this.startTime = Date.now();
      this.firestoreService.updateStatus(this.orders.id,$event.target.value);
      
      //* Guardar startTime en FS
    } else if ($event.target.value == 'Ready'){
      // console.log('se pausa el cronómetro');
      this.pause()
    
      //? Guardar date en documento de la colección
    } else {
      // console.log('reinicia el cronómetro');
      this.time = "00:00"
    }
  }

  start(){
    const btn = document.querySelectorAll('select');
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

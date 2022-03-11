import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';


@Component({
  selector: 'app-waiter-mainview',
  templateUrl: './waiter-mainview.component.html',
  styleUrls: ['./waiter-mainview.component.scss']
})
export class WaiterMainviewComponent implements OnInit {


  constructor(
    private dataService : DataService)
    { }

  ngOnInit(): void {
    this.dataService.getJSON().subscribe(data=>{
      // console.log(data);
    })
  }

}

import { Component, OnInit } from '@angular/core';
import * as data from '../../../data/data.json';

@Component({
  selector: 'app-waiter-mainview',
  templateUrl: './waiter-mainview.component.html',
  styleUrls: ['./waiter-mainview.component.scss']
})
export class WaiterMainviewComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
    console.log(data);
  }

}

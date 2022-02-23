import { Component, OnInit } from '@angular/core';
import { faCoffee, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.scss']
})
export class PlaceOrderComponent implements OnInit {
  faCoffee = faCoffee;
  faTrash = faTrashAlt;

  constructor() { }

  ngOnInit(): void {
  }

}

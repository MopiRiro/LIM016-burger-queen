import { Component, OnInit } from '@angular/core';
import { faCoffee, faTrashAlt } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
  faCoffee = faCoffee;
  faTrash = faTrashAlt;

  cant:number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  addCnt(){
    this.cant += 1;
  }

  subtractCnt(){
    this.cant -= 1;
  }

}

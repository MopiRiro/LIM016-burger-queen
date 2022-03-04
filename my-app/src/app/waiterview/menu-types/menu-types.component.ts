import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';


@Component({
  selector: 'app-menu-types',
  templateUrl: './menu-types.component.html',
  styleUrls: ['./menu-types.component.scss']
})


export class MenuTypesComponent implements OnInit {

  constructor(
    private dataService : DataService) { }

  ngOnInit(): void {
    
    
  }

  getTypeMenu(){
    this.dataService.getJSON().subscribe(data=>{
      // console.log(data);
      const {productos} = data;
      console.log(productos);  
    })
  }

  

}

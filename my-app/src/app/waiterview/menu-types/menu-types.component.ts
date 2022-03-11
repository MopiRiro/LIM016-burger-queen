import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';


@Component({
  selector: 'app-menu-types',
  templateUrl: './menu-types.component.html',
  styleUrls: ['./menu-types.component.scss']
})

export class MenuTypesComponent implements OnInit {

  selectedOption: string = '';
  printedOption: string = '';
  personalType: boolean = false;
  promotionsType: boolean = false;

  public options = [
    { name:'Open this select menu' , value:''}
  ]


  print() {
    this.printedOption = this.selectedOption;
  }

  constructor(private dataService : DataService) { }

  ngOnInit(): void {
    this.dataService.getJSON().subscribe(data=>{
      // console.log(data);
      const {productos} = data;
      // console.log(productos);
      const arrayMenuType:any = [];
      productos.forEach((producto:any) => {
        producto.menu.forEach((itemMenu:any)=>{
        //  this.options.push({name:itemMenu, value:itemMenu});
          return arrayMenuType.push(itemMenu);
        })
      });

      const filterArrayMenuType = arrayMenuType.filter((valor:any, indice:any) => {
          return arrayMenuType.indexOf(valor) === indice;
        }
      );

      filterArrayMenuType.forEach((itemMenu:any)=>{
        this.options.push({name:itemMenu, value:itemMenu});
        });

      // console.log(filterArrayMenuType);

      // this.options.push({name:"option 3", value:3});
      // const [ , , ,menu] = productos.menu;
      // console.log(menu);
      // const arrayMenus = productos.forEach(
      //   (x:any) => console.log(x.menu),
      //   );
    });
  }

  filterType(){
    console.log(this.selectedOption)
  }

}

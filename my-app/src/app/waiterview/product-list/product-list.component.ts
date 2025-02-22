import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})

export class ProductListComponent implements OnInit {
  public listproducts: any[] = [];
  menu:any[] = [];
  selectedOption: string = '';
  printedOption: string = '';

  public options = [
    { name:'Open this select menu' , value:''}
  ]


  print() {
    this.printedOption = this.selectedOption;
  }

  constructor(private dataService : DataService) { }

  ngOnInit(): void {
    this.getAllProducts();

    this.dataService.getJSON().subscribe(data=>{
      const {productos} = data;
      const arrayMenuType:any = [];
      productos.forEach((producto:any) => {
        producto.menu.forEach((itemMenu:any)=>{
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
    });


  }


  getAllProducts(){
    this.dataService.getJSON().subscribe(data=>{
      const {productos} = data;
      this.listproducts = productos;
    });
  }

  filteredMenu($event:any){
    console.log("Funciona el evento");
    console.log($event.target.value);
    this.dataService.getJSON().subscribe(data=>{
      const {productos} = data;
      if($event.target.value =='Open this select menu'){
        this.listproducts = productos;
        console.log(this.listproducts);
      }else {
        const typeProducts = productos.filter((item:any) => item.menu == $event.target.value);
        const aditProducts = productos.filter((item:any) => item.tipo == 'adicional');
        const pruebaConcat = typeProducts.concat(aditProducts);
        this.listproducts = pruebaConcat;
        console.log(this.listproducts);
      }
    });    
  }


}

import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  public productos: any[] = [];

  constructor(private dataService : DataService) { }

  ngOnInit(): void {
    this.getAllProducts();
  }


  getAllProducts(){
    this.dataService.getJSON().subscribe(data=>{
      const {productos} = data;
      this.productos = productos;
      // productos.forEach((producto:any) => {
      //   const [id,description,precio,img,tipo,menu] = productos;
      //   console.log(id);
      //   console.log(description);
      // });
    });
  }

}

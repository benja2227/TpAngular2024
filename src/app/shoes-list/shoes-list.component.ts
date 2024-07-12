import { Component } from '@angular/core';
import { Shoes } from './Shoes';
import { ShoesCartService } from '../shoes-cart.service';
import { ShoesDataService } from '../shoes-data.service';
@Component({ 
  selector: 'app-shoes-list',
  templateUrl: './shoes-list.component.html',
  styleUrl: './shoes-list.component.scss'
})
export class ShoesListComponent {
  shoes : Shoes[] = [];
  

  constructor(private carrito : ShoesCartService, 
    private shoesDataService: ShoesDataService){
  }

  ngOnInit() : void{
    this.shoesDataService.getAll()
    .subscribe(shoes => this.shoes = shoes); 
  }
  


  agregarAlCarrito(shoe : Shoes) : void{
    if(shoe.cantidad > 0){
      this.carrito.agregarAlCarrito(shoe);
      shoe.stock -= shoe.cantidad;
      shoe.cantidad = 0;
    }
  }
}



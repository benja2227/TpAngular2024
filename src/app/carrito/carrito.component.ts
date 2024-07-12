import { Component } from '@angular/core';
import { ShoesCartService } from '../shoes-cart.service';
import { Shoes } from '../shoes-list/Shoes';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.scss'
})
export class CarritoComponent {
  
  listaDeCompras$ : Observable<Shoes[]>;

  constructor(private carrito : ShoesCartService){
    this.listaDeCompras$ = carrito.listaDeCompras.asObservable();
  }
}

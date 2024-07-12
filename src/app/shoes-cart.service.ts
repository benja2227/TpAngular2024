import { Injectable } from '@angular/core';
import { Shoes } from './shoes-list/Shoes';
import { BehaviorSubject, find } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoesCartService {

  private _listaDeCompras : Shoes[] = [];
  listaDeCompras : BehaviorSubject<Shoes[]> = new BehaviorSubject<Shoes[]>([]);

  constructor() { }

  agregarAlCarrito(shoe:Shoes){
    let item = this._listaDeCompras.find((v1)=> v1.nombre == shoe.nombre);
    if(!item){
      this._listaDeCompras.push({... shoe});
    } 
    else{
      item.cantidad +=  shoe.cantidad;
    }
    console.log(this._listaDeCompras);
    this.listaDeCompras.next(this._listaDeCompras);
  }

  
}

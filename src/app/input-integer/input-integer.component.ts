import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Shoes } from '../shoes-list/Shoes';
import { ShoesListComponent } from '../shoes-list/shoes-list.component';

@Component({
  selector: 'app-input-integer',
  templateUrl: './input-integer.component.html',
  styleUrl: './input-integer.component.scss'
})

export class InputIntegerComponent  {
  
  @Input()
  cantidad : number=0;

  @Input()
  max: number=0;

  @Output()
  cantidadChange: EventEmitter<number> = new EventEmitter<number>();

  aumentarCantidad():void{
    if(this.cantidad < this.max && this.max!=0){
      this.cantidad++;
      this.cantidadChange.emit(this.cantidad);
    }
  }

  disminuirCantidad():void{
    if(this.cantidad>0){
      this.cantidad--;
      this.cantidadChange.emit(this.cantidad);
    }
  }

  cambioCantidad(event :Event):void{
    const input = event.target as HTMLInputElement;
    let value = input.value;
    if(Number(value) > this.max || this.esCaracter(value)){
      console.log("entro al if");
      this.cantidad = 0;
    }
    this.cantidadChange.emit(this.cantidad);
  }
  
  esCaracter(valor: string): boolean {
    return /^[a-zA-Z-!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+$/.test(valor) || /^\d+[a-zA-Z-!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+$/.test(valor) ;
  }

}

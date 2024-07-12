import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Shoes } from './shoes-list/Shoes';

const URL = 'https://6686bd6f83c983911b0373ff.mockapi.io/api/shoes';

@Injectable({
  providedIn: 'root'
})
export class ShoesDataService {

  constructor(private  http :HttpClient ) { }

  //consume la api y devuelve un observable a la respuesta
  public getAll() : Observable<Shoes[]>{

    return this.http.get<Shoes[]>(URL)
    .pipe(
      tap((shoes : Shoes[]) =>shoes.forEach(shoes => shoes.cantidad = 0))
    ); 
  }
}

import { Component, OnInit } from '@angular/core';
import {data} from './data';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor() { }
  public fotos: any[]=data;
  public arreglo:number[]= [1, 2, 3, 4, 3, 6];
  public arraySuperpuesto:number[]= [];

  public arreglo2:number[]= [1, 2, 3, 3,3,3, 6];

  ngOnInit(): void {
   console.log(this.removerIgualesArrayOrdenado(this.arreglo2));
   //this.almostIncreasingSequence(this.arreglo);
  }

   almostIncreasingSequence(sequence: number[]):boolean {

if(sequence.length===1){
  return true;
}

    let aux=[...sequence];
    console.log(aux);
    let aux2=[];
    for(let element=0; element< aux.length; element++ ){
         for(let element2=0; element2<aux.length; element2++ ){
           if(element2!=element){
            aux2.push(aux[element2]);
           }else{
             continue;
           }
         }
         let aux3= this.removerIgualesArrayOrdenado(aux2);
         console.log(aux2);
         if(this.compararDosArray(this.ordernarArrayAscendente(aux3), aux2)){
          return true;
         }

         aux2.length=0;
    }
    return false;
}


ordernarArrayAscendente (a:number[]):number[] {
   return a.sort(function(a, b){return a-b});
}

 removerIgualesArrayOrdenado (a:number[]):number[] {
  let aux:number[]=[];
  for(let i=0; i<a.length; i++ ){
    if(a[i]!==a[i+1]  ){
      const val = (typeof a[i] === 'object') ? Object.assign({}, a[i]) : a[i];
      aux.push(val);
    }
 }
    return aux;
  }

  clonarArray (a:number[]):number[] {
    let aux:number[]=[];
      for (const v of a) {
        const val = (typeof v === 'object') ? Object.assign({}, v) : v;
        aux.push(val);
      }
      return aux;
    }
  

  compararDosArray(arraySuperpuesto:number[], aux:number[]) {
    if(JSON.stringify(arraySuperpuesto)==JSON.stringify(aux) ){
      return true;
    }else{
      return false;
    }
  }


}

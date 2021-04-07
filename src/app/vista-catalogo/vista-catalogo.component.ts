import { Component, OnInit } from '@angular/core'
import { CatalogoService } from './vista.catalogo.service';
import { Mascota } from  './mascota';
import {data} from './data';



@Component({
  selector: 'app-vista-catalogo',
  templateUrl: './vista-catalogo.component.html',
  styleUrls: ['./vista-catalogo.component.css']
})
export class VistaCatalogoComponent implements OnInit {

  constructor(private  catalogoService:  CatalogoService) { }
  public mascotaElegida: Mascota= {
    mascotaid:1,
    img: "",
    nombre: "",
    ciudad: "",
    provincia: "",
  };

  //mascotaElegida2: Mascota=new Mascota();

  public listadoFiltradoMascotas: Mascota[]=data;
  
  ngOnInit(): void {
    this.cargarMascotas( this.mascotaElegida);
  }


  cargarMascotas( mascota: Mascota){
    console.log("Entrando se llama al metodo que llena el grid");
    this.catalogoService.consultaMascotas(mascota).subscribe(res=>{
     
    },
    err=>{
      alert("Hemos Traido la Información de todas las mascotas ;)");
  
      //this.presentToast(err.error);
    } );
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { tap } from  'rxjs/operators';
import { Observable, BehaviorSubject } from  'rxjs';
import { Mascota } from  './mascota';
import { MascotaResponse } from  './MascotaResponse';
import {LocalStorageServiceService} from '../local-storage-service.service';
import {data} from './data';

@Injectable({
    providedIn: 'root'
  })

  export class CatalogoService {

    AUTH_SERVER_ADDRESS:  string  =  'http://localhost:3000';

    public listadoFiltradoMascotas: Mascota[]=data;


  authSubject  =  new  BehaviorSubject(false);
    constructor(private  httpClient:  HttpClient, private storage: LocalStorageServiceService ) { 
  
    }
  
    consultaMascotas(mascota: Mascota): Observable<MascotaResponse> {
      return this.httpClient.post<MascotaResponse>(`${this.AUTH_SERVER_ADDRESS}/register`, mascota).pipe(
        tap(async (res:  MascotaResponse ) => {
          if (res.mascota) {
            this.authSubject.next(true);
          }
        })
      );
    }
  }
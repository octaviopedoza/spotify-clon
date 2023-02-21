import { environment } from './../../../../env/environment'; //Archivo environment de donde tomaremos la direccion de la api
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of, catchError, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrackService {

  private readonly URL = environment.api; //Creamos una propiedad privada de solo lectura llamada URL y va a ser igual a lo que tenemos en api dentro del archivo environment
  
  constructor(private httpClient: HttpClient) {}

  getAllTracks$():Observable<any>{ //funcion Observable que obtiene todas las canciones del api y retorna un valor de tipo any
    return this.httpClient.get(`${this.URL}/tracks`)
    .pipe( map(({ data }: any) => {
      return data
    }) )
  }

  getRandomTracks$():Observable<any>{ //funcion Observable que obtiene todas las canciones del api y retorna un valor de tipo any
    return this.httpClient.get(`${this.URL}/tracks`)
    .pipe( tap(({ data }: any) => {
      return data.reverse()
    }),
    catchError((err) => { //cacheo de error al consultar API Rest dentro de toda la aplicación
      const {status, statusText} = err;
      console.log('Algo paso, necesitas revisar',[status, statusText] )
      return of([])
    })
    )
  }

}

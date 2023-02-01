import { Injectable } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { observable, Observable, of } from 'rxjs';
import * as dataRaw from '../../../data/tracks.json'

@Injectable({
  providedIn: 'root'
})
export class TrackService {

  dataTracksTrending$: Observable<TrackModel[]> = of([]) // creamos una variable tipo Observable y que contendra un array de tipo TrackModel vacio
  dataTracksRandom$: Observable<any> = of([]) // creamos una variable tipo Observable y que contendra un valor de tipo any
  constructor() {
    const { data }: any = (dataRaw as any).default; // Creamos una constante de tipo any y la igualamos a lo de nuestro dataRaw

    this.dataTracksTrending$ = of(data)

    this.dataTracksRandom$ = new Observable((observer) => {
      const trackExample: TrackModel = {
        _id:9,
        name: 'Leve',
        album: 'Cartel de Santa',
        url: 'http://',
        cover: 'https://i.scdn.co/image/ab6761610000e5ebbd172041a059e4b6e46e2cfc'
      }
      observer.next([trackExample])
    })
   }
}

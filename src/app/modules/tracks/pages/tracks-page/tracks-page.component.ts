import { TrackService } from './../../services/track.service';
//Importamos el modelo TracksModel El cual contiene la estructura de datos que debe contener una canción
import { TrackModel } from './../../../../core/models/tracks.model';
import { Component, OnDestroy, OnInit } from '@angular/core';
//Importamos los datos del Json dataSet ubicado en la carpeta data, asignamos los valores dentro de una variable llamada dataRaw
import * as dataRaw from '../../../../data/tracks.json';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tracks-page',
  templateUrl: './tracks-page.component.html',
  styleUrls: ['./tracks-page.component.css']
})
export class TracksPageComponent implements OnInit, OnDestroy {
  tracksTrending: Array<TrackModel> = [] //Lista de tracks que aparecera dentro del trending
  tracksRandom: Array<TrackModel> = [] //Lista de tracks que apareceran de forma random

  listObservers$: Array<Subscription> = []

  //mockTracksList: Array<TrackModel> = [ ] //Variable de tipo array de tipo de dato TrackModel vacio
  constructor(private TrackService: TrackService) {}

  ngOnInit(): void {
    // const { data }:any = (dataRaw as any).default //Constante data a la que le añadimos los datos de dataRaw
    // this.mockTracksList = data; // hacemos que la variable creada anteriormente sea igual a data
    const observer1$ = this.TrackService.dataTracksTrending$.subscribe(response => {
      this.tracksTrending = response
      this.tracksRandom = response
      console.log('Canciones trending', response)
    })
    const observer2$ = this.TrackService.dataTracksRandom$.subscribe(response => {
      this.tracksRandom = [...this.tracksRandom,...response] //agregamos el track creado en track service a nuestro nuevo array de tracksRandom concatenandolo con lo que ya tiene dentro
      console.log('Canciones random entrando', response)
    })

    this.listObservers$ = [observer1$,observer2$]
  }

  ngOnDestroy(): void{
    this.listObservers$.forEach(u => u.unsubscribe())
  }

}

import { TrackService } from './../../services/track.service';
//Importamos el modelo TracksModel El cual contiene la estructura de datos que debe contener una canción
import { TrackModel } from './../../../../core/models/tracks.model';
import { Component, OnDestroy, OnInit } from '@angular/core';
//Importamos los datos del Json dataSet ubicado en la carpeta data, asignamos los valores dentro de una variable llamada dataRaw
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

  constructor(private trackService: TrackService) {} //Inyectamos el servicio de TrackService con alias trackService

  ngOnInit(): void {
    this.loadDataAll()
    this.loadDataRandom()
  }

  loadDataAll(): void{ 
    this.trackService.getAllTracks$()
    .subscribe((response: TrackModel[]) => {
      this.tracksTrending = response
    })
  }

  loadDataRandom(): void{ //Manejandolo como suscribe el resultado de la respuesta del API
    this.trackService.getRandomTracks$()
    .subscribe((response: TrackModel[]) => { 
      this.tracksRandom = response
    })
  }

  ngOnDestroy(): void{
    
  }

}

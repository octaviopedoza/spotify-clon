//Importamos el modelo TracksModel El cual contiene la estructura de datos que debe contener una canción
import { TrackModel } from './../../../../core/models/tracks.model';
import { Component, OnInit } from '@angular/core';
//Importamos los datos del Json dataSet ubicado en la carpeta data, asignamos los valores dentro de una variable llamada dataRaw
import * as dataRaw from '../../../../data/tracks.json';

@Component({
  selector: 'app-tracks-page',
  templateUrl: './tracks-page.component.html',
  styleUrls: ['./tracks-page.component.css']
})
export class TracksPageComponent implements OnInit {
  mockTracksList: Array<TrackModel> = [ ] //Variable de tipo array de tipo de dato TrackModel vacio
  constructor() {}

  ngOnInit(): void {
    const { data }:any = (dataRaw as any).default //Constante data a la que le añadimos los datos de dataRaw
    this.mockTracksList = data; // hacemos que la variable creada anteriormente sea igual a data
  }

}

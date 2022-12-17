import { TrackModel } from './../../../core/models/tracks.model';
import { Component, OnInit} from '@angular/core';
import * as dataRaw from '../../../data/tracks.json' //importamos todos los datos del dataset dentro de dataRaw

@Component({
  selector: 'app-play-list-body',
  templateUrl: './play-list-body.component.html',
  styleUrls: ['./play-list-body.component.css']
})
export class PlayListBodyComponent implements OnInit{
  tracks: TrackModel[] = [];
  optionSort:{property:string | null, order:string} = {property: null, order:'asc'}
  constructor() {}

  ngOnInit(): void {
    // Creamos una constante con destructuracion de JS llamada data y la hacemos igual a dataRaw y decimos que queremos sacar el default
    const {data}:any = (dataRaw as any).default
    // el Array tracks que acabamos de crear arriba va a ser igual a la constante data
    this.tracks = data;
  }

  changeSort(property:string): void{
    const {order} = this.optionSort
    this.optionSort = {
      property,
      order: order === 'asc' ? 'des' : 'asc'
    }
    console.log(this.optionSort)
  }
}

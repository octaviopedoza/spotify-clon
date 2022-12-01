//Importamos el modelo TrackModel para poder hacer uso de la estructura de datos de las canciones
import { TrackModel } from './../../../core/models/tracks.model';
//Importamos la interface Input para poder hacer la comunicacion entre componentes
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-generic',
  templateUrl: './section-generic.component.html',
  styleUrls: ['./section-generic.component.css']
})
export class SectionGenericComponent implements OnInit{
  //Utilizamos el decorador @Input para comunicar variables entre componentes
  /* Utilizamos el decorador y le pasamos una variable tipo string vacia, con esto podemos utilizarlo esta variable como atributo
  dentro de otros componentes */
  @Input() title: String = '';
  //Utilizamos el decorador input y le pasamos una variable que puede ser solo small ó big y lo inicializamos a big
  @Input() mode: 'small' | 'big' = 'big'
  /* Utilizamos el decorador @Input y lo asociamos a una variable llamada dataTrack de tipo array y con datos de tipo TrackModel,
  el array sera inicialisado de forma vacia */
  @Input() dataTracks: Array<TrackModel> = []
  constructor() {}

  ngOnInit(): void {

  }

}

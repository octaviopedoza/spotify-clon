import { MultimediaService } from './../../services/multimedia.service';
import { TrackModel } from './../../../core/models/tracks.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-player',
  templateUrl: './card-player.component.html',
  styleUrls: ['./card-player.component.css']
})
export class CardPlayerComponent implements OnInit{
  @Input() mode: 'small' | 'big' = 'small';
  @Input() track: TrackModel = {_id:0, name:'', album:'', url:'', cover:''};

  constructor(private multimediaService: MultimediaService) {} //inyectamos el servicio MultimediaService con el alias multimediaService

  ngOnInit(): void {

  }

  sendPlay(track: TrackModel):void{ //indicamos que vamos a recibir un track del TrackModel
    console.log("enviando cancion al reproductor",track)
    this.multimediaService.callback.emit(track) //del servicio multimediaService llamamos a la variable callback y le decimos que es de tipo emit y va a emitir nuestra variable track de mas arriba

  }

}

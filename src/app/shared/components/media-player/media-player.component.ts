import { MultimediaService } from './../../services/multimedia.service';
import { TrackModel } from './../../../core/models/tracks.model';
import { Component, OnDestroy, OnInit} from '@angular/core';
import { Subscription } from 'rxjs'; //programacion reactiva

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css']
})
export class MediaPlayerComponent implements OnInit, OnDestroy{
  mockCover: TrackModel = {
    cover: 'https://jenesaispop.com/wp-content/uploads/2009/09/guetta_onelove.jpg',
    album: 'One Love',
    name: 'Getting Over',
    url: "http://localhost/track.mp3",
    _id: 1

  }

  listObservers$: Array<Subscription> = [] //array de observadores de tipo Subscription

  constructor(private multimediaService:MultimediaService) {} //inyectamos el servico MultimediaService con el slias multimediaService

  ngOnInit(): void {
    const observer1$: Subscription = this.multimediaService.callback.subscribe( //creamos una variable observadora que sera la que estara pendiente y sera igual a lo que podemos escuchar de callback
      (response: TrackModel) => { //donde la respuesta tiene que ser una cancion de TrackModel
        console.log("Recibiendo cancion...",response)
      }
    )
    this.listObservers$ = [observer1$]
  }

  ngOnDestroy(): void {
    this.listObservers$.forEach(u => u.unsubscribe())//forEach que por cada valor de listObserver va desuscribiendo
    console.log("Boooom");
  }
}

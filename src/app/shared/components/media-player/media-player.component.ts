import { MultimediaService } from './../../services/multimedia.service';
import { TrackModel } from './../../../core/models/tracks.model';
import { Component, OnDestroy, OnInit} from '@angular/core';
import { Subscription, Observable } from 'rxjs'; //programacion reactiva

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css']
})
export class MediaPlayerComponent implements OnInit, OnDestroy{

  listObservers$: Array<Subscription> = [] //array de observadores de tipo Subscription
  state:string = 'paused'

  constructor(public multimediaService:MultimediaService) {} //inyectamos el servico MultimediaService con el slias multimediaService

  ngOnInit(): void {
    const observer1$ = this.multimediaService.playerStatus$
    .subscribe(status => this.state = status)
    this.listObservers$ = [observer1$]
  }

  ngOnDestroy(): void {
    this.listObservers$.forEach(u => u.unsubscribe())//forEach que por cada valor de listObserver va desuscribiendo
    console.log("Boooom");
  }
}

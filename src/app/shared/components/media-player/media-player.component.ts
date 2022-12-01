import { TrackModel } from './../../../core/models/tracks.model';
import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css']
})
export class MediaPlayerComponent implements OnInit{
  mockCover: TrackModel = {
    cover: 'https://jenesaispop.com/wp-content/uploads/2009/09/guetta_onelove.jpg',
    album: 'One Love',
    name: 'Getting Over',
    url: "http://localhost/track.mp3",
    _id: 1

  }

  constructor() {}

  ngOnInit(): void {

  }
}

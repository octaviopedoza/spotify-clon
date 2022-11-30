import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css']
})
export class MediaPlayerComponent implements OnInit{
  mockCover: any = {
    cover: 'https://jenesaispop.com/wp-content/uploads/2009/09/guetta_onelove.jpg',
    album: 'One Love',
    name: 'Getting Over'
  }

  constructor() {}

  ngOnInit(): void {
      
  }
}

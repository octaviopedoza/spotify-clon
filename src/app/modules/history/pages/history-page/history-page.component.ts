import { TrackModel } from './../../../../core/models/tracks.model';
import { SearchService } from './../../services/search.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history-page',
  templateUrl: './history-page.component.html',
  styleUrls: ['./history-page.component.css']
})
export class HistoryPageComponent implements OnInit{
  listResults:TrackModel[] = []

  constructor(private searchService: SearchService){

  }

  ngOnInit(): void {
    
  }

  receiveData(event: string): void{
    console.log("Escucho desde history-page component",event)
    this.searchService.searchTracks$(event)
    .subscribe(({data}) => {
      this.listResults = data;
    })
  }

}

import { HttpClient } from '@angular/common/http';
import { environment } from './../../../../env/environment';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private readonly URL = environment.api
  constructor(private http:HttpClient) { }

  searchTracks$(term: string): Observable<any> {
    return this.http.get(`${this.URL}/tracks?src=${term}`)
    .pipe(
      map((dataRaw:any) => dataRaw.data)
    )
  }
}

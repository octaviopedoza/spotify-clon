import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MultimediaService {

  callback: EventEmitter<any> = new EventEmitter<any>() //definimos una variable llamada callback de tipo EventEmitter que ouede ser any y lo igualamos a EventEmitter<any>

  constructor() { }
}

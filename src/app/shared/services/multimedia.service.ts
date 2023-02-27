import { TrackModel } from './../../core/models/tracks.model';
import { BehaviorSubject, observable, Observable, Observer } from 'rxjs';
import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MultimediaService {

  callback: EventEmitter<any> = new EventEmitter<any>() //definimos una variable llamada callback de tipo EventEmitter que ouede ser any y lo igualamos a EventEmitter<any>

  public audio!:HTMLAudioElement
  public trackInfo$: BehaviorSubject<any> = new BehaviorSubject(undefined)
  public timeElapsed$: BehaviorSubject<string> = new BehaviorSubject('00:00')
  public timeRemaining$: BehaviorSubject<string> = new BehaviorSubject('-00:00')
  public playerStatus$: BehaviorSubject<string> = new BehaviorSubject('paused')
  public playerPercentage$: BehaviorSubject<number> = new BehaviorSubject(0)

  constructor() {
    this.audio = new Audio()
    this.trackInfo$.subscribe(responseOk => {
      if(responseOk){
      this.setAudio(responseOk) //pasamos la respuesta del track a la funcion publica para su uso
      }
    })
    this.listenAllEvents()
  }

  // Funciones Privadas
  private listenAllEvents(): void{
    this.audio.addEventListener('timeupdate', this.calculeTime, false)
    this.audio.addEventListener('playing', this.setPlayerStatus, false)
    this.audio.addEventListener('play', this.setPlayerStatus, false)
    this.audio.addEventListener('pause', this.setPlayerStatus, false)
    this.audio.addEventListener('ended', this.setPlayerStatus, false)
  }

  private setPlayerStatus = (state: any) => {
    switch(state.type){
      case 'play':
        this.playerStatus$.next('play')
        break;
      case 'playing':
        this.playerStatus$.next('playing')
        break;
      case 'ended':
        this.playerStatus$.next('ended')
        break;
      default:
        this.playerStatus$.next('pause')
        break;
    }
  }

  private calculeTime = () => {
    const { duration, currentTime } = this.audio
    this.setTimeElapsed(currentTime)
    this.setRemainin(currentTime, duration)
    this.setPercentage(currentTime, duration)
  }

  private setTimeElapsed(currentTime:number): void{
    let seconds = Math.floor(currentTime % 60) // optenemos los segundos
    let minutes = Math.floor((currentTime / 60) % 60)

    const displaySeconds = (seconds < 10) ? `0${seconds}` : seconds;
    const displayMinutes = (minutes < 10) ? `0${minutes}` : minutes;
    const displayFormat = `${displayMinutes}:${displaySeconds}`
    this.timeElapsed$.next(displayFormat)
  }

  private setRemainin(currentTime: number, duration: number): void{
    let timeLeft = duration - currentTime;
    let seconds = Math.floor(timeLeft % 60) // optenemos los segundos
    let minutes = Math.floor((timeLeft / 60) % 60)
    const displaySeconds = (seconds < 10) ? `0${seconds}` : seconds;
    const displayMinutes = (minutes < 10) ? `0${minutes}` : minutes;
    const displayFormat = `-${displayMinutes}:${displaySeconds}`
    this.timeRemaining$.next(displayFormat)
  }

  private setPercentage(currentTime: number, duration: number): void{
    let percentage = (currentTime *100) / duration;
    this.playerPercentage$.next(percentage)
  }

  // Funciones Publicas ----------------------------------------------------------------------------->
  public setAudio(track:TrackModel): void{
    this.audio.src = track.url
    this.audio.play()
  }

  public togglePlayer(): void{
    (this.audio.paused) ? this.audio.play() : this.audio.pause() //metodos html
  }

}

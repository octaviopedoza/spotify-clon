// Directiva que detecta imagenes rotas dentro del preoyecto

import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: 'img[appImgBroken]' //nombre de la directiva que apecta solo a los elementos img
})
export class ImgBrokenDirective {
  @HostListener('error') handleError(): void{
    const elNative = this.elHost.nativeElement
    console.log('Esta imagen rebento --->',this.elHost);
    elNative.src = "../../../assets/1553369857-spotify.jpg"
  }

  constructor(private elHost: ElementRef) {
    console.log(this.elHost)
  }

}

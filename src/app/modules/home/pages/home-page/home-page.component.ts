import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page', //nombre para llamar el componente dentro de un apartad html
  templateUrl: './home-page.component.html', //htm asociado al componente
  styleUrls: ['./home-page.component.css'] //Url de estilos que afectan al componente
})
export class HomePageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
      
  }
}

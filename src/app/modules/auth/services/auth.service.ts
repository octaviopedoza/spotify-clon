import { CookieService } from 'ngx-cookie-service';
import { Observable, tap } from 'rxjs';
import { environment } from './../../../../env/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private URL = environment.api //Hacemos referencia a la url del api dentro del environment

  constructor(private http: HttpClient, private cookie:CookieService, private router:Router) { } //inyectamos los servicios HttpClien y CookieService para hacer uso de estos modulos

  sendCredentials(email:string, password:string): Observable<any>{ //Metodo de envio de credenciales al hacer login
    const body = { //constante body que contiene la estructura necesaria de datos para la consulta del API y que estan inyectados dentro de la clase
      email,
      password
    }

     //retornamos del http el metodo post donde traemos el la variable URL que declaramos mas arriba y como segundo parametro la const body que creamos
    return this.http.post(`${this.URL}/auth/login`, body)
    .pipe( //agregamos pipe para guardar la session dentro de la cookie
      tap((responseOk:any) => {
      const {tokenSession, data} = responseOk //Creamos constante llamada tokenSession con los datos que trae de la api
      this.cookie.set('token', tokenSession, 4, '/') //Creamos la cooki con los datos necesarios(nombre, valor a guardar, dias de vida y ubicacion)
      this.router.navigate(['/','tracks'])//Al crear la cookie exitosamente redirigimos a la pagina de TRACKS
    }))
  }
}

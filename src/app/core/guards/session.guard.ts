import { CookieService } from 'ngx-cookie-service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionGuard implements CanActivate {

  constructor(private CookieService:CookieService, private router:Router){
  //Agregamos un constructor para poder inyectar el servicio de cookies y poder hacer uso de este modulo desde este punto

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.checkCookieSession(); 
  }
  
  checkCookieSession(): boolean { //Metodo que revisa si existe una cookie de session activa donde tenemos guardado el token de session, si existe nos regresa un true
    try{
      const token: boolean = this.CookieService.check('token') //creamos una constante de tipo boolean que igualamos a lo que resulte del check del CookieService del token
      console.log("consegui esto desde el guard",token);
      if(!token){ //si el token no existe usamos el router para mandar al usuario a una url determonada y no se quede con la pantalla en negro
        this.router.navigate(['/','auth'])
      }
      return token //si no existe ningun problema regresamos lo que tenemos en la constante "token"
    }catch(e){ //Si existe algun error en el metodo entramos a este punto
      console.log("Algo sucedio dentro del guard",e);
      return false; //Si existe algun problema regresamo false y no entra al guard
    }
  }

}

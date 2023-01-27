import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.css']
})
export class AuthPageComponent implements OnInit{
  formLogin: FormGroup = new FormGroup({});
  constructor(){}

  ngOnInit(): void {
    this.formLogin = new FormGroup(
      {
        email:new FormControl('',[
          // Validaciones basicas
          Validators.required, //validamos que exista el campo
          Validators.email //Validamos que el campo sea de tipo email
        ]),
        password: new FormControl('',[
          Validators.required, //campo requerido
          Validators.minLength(6), //minimo de caracteres a aceptar
          Validators.maxLength(12) //maximo de caracteres a aceptar
        ])
      }
    )
  }
  
// funcion que captura los datos que se envian desde el formulario de login
  sendLogin(): void{
    const body = this.formLogin.value
    console.log("Puto", body);
  }
}

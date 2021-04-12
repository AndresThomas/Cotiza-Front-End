import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MD5 } from 'crypto-js';
import { CookieService } from 'ngx-cookie-service';
import { RequestServiceService } from '../request-service.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private request: RequestServiceService,
    private router: Router,
    private cookieService: CookieService
    ) { }
  
  loginForm = new FormGroup({
    username: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required),
  });

  private cookieValue: string ="";
  login : any;
  name : string ="";
  message: string = "";
  onSubmit(data:any){
    //data.password = MD5(data.password).toString(); investigar como decodificar en backend
    console.log(data.password,'data')
    this.request.postLogin(data).subscribe(
      login => {
        this.login = login; //<- respuesta del backend
        this.name = this.login.username;
        this.cookieService.set('cookieLogin',this.login.token); //creacion de cookie para validar autenticacion
        localStorage.setItem("name",this.name);
        this.router.navigate(["/dashboard"]);//redireccion a dashboard     
      },
      (error) =>{
        if(data.username == "" && data.password == ""){
          this.message = "Rellene los campos";
        }else{
          this.message = "Usuario y contraseña no validos";
        }  
      }
    );  
  }
  
  ngOnInit(): void {}

}

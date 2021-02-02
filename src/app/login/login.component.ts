import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
    this.request.postLogin(data).subscribe(
      login => {
        this.login = login;
        this.cookieService.set('cookieLogin',this.login.token);
        this.router.navigate(["/dashboard"]);     
      },
      (error) =>{
        console.log(error);
        console.log(data);
        if(data.username == "" && data.password == ""){
          this.message = "Rellene los campos";
        }else{
          this.message = "Usuario y contraseña no validos";
        }

        
      }
    );  
  }
  
  ngOnInit(): void {
    
  }

}

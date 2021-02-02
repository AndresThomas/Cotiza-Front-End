import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RequestServiceService } from '../request-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private request: RequestServiceService) { }

  loginForm = new FormGroup({
    username: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required),
  });

  login : any;
  name : string ="";
  onSubmit(data:any){
    this.request.postLogin(data).subscribe(
      login => {
        this.login = login;
        console.log(this.login,"win");      
      }
    );  
  }
  
  ngOnInit(): void {
    
  }

}

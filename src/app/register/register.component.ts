import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RequestServiceService } from '../request-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private request: RequestServiceService) { }

  registroForm = new FormGroup({
    email: new FormControl('',Validators.required),
    username: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required),
  });

  ngOnInit(): void {
  }

  myRequest : any;

  onSubmit(data:any){
    this.request.postRegistro(data).subscribe(
      myRequest => {
        this.myRequest = myRequest;
        console.log(this.myRequest,"win");      
      }
    );  
  }

}

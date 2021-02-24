import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-dialog',
  templateUrl: './product-dialog.component.html',
  styleUrls: ['./product-dialog.component.css']
})
export class ProductDialogComponent implements OnInit {

  constructor() { }

  productForm = new FormGroup({
    nombre: new FormControl('',Validators.required),
    cantidad: new FormControl('',Validators.required),
    descripcion: new FormControl('',Validators.required),
    precio: new FormControl('',Validators.required),
  });

  onSubmit(data:any){

  }
  ngOnInit(): void {
  }

}

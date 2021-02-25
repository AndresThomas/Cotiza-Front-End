import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RequestServiceService } from '../request-service.service';

@Component({
  selector: 'app-product-dialog',
  templateUrl: './product-dialog.component.html',
  styleUrls: ['./product-dialog.component.css']
})
export class ProductDialogComponent implements OnInit {

  constructor(
    private request: RequestServiceService
  ) { }

  productForm = new FormGroup({
    folio: new FormControl('',Validators.required),
    cantidad: new FormControl('',Validators.required),
    descripcion: new FormControl('',Validators.required),
    costo: new FormControl('',Validators.required),
  });

  product : any;
  folio:string ="";
  cantidad:string ="";
  descripcion:string="";
  costo : string ="";

  onSubmit(data:any){
    console.log(data);
    this.request.postProducts(data).subscribe(
      product => {
        this.product = product; //<- respuesta del backend
        this.folio = this.product.folio;
        this.descripcion = this.product.descripcion;
        this.costo = this.product.costo;
        this.cantidad = this.product.cantidad;
      },
      (error) =>{
        console.log(error);
      }
    );  
  }

  
  
  ngOnInit(): void {
  }

}

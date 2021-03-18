import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Product } from '../Product';
import { RequestServiceService } from '../request-service.service';

@Component({
  selector: 'app-product-detail-dialog',
  templateUrl: './product-detail-dialog.component.html',
  styleUrls: ['./product-detail-dialog.component.css']
})
export class ProductDetailDialogComponent implements OnInit {
  row : Product;
  constructor(
    public dialogref: MatDialogRef<ProductDetailDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Product,
    private request: RequestServiceService,
  ) {
    this.row = data;
  }
  result: any;
  message: string = "";

  productForm = new FormGroup({
    folio: new FormControl('',[Validators.required]),
    cantidad: new FormControl('',[Validators.required]),
    descripcion: new FormControl('',Validators.required),
    costo: new FormControl('',Validators.required),
  });


  deleteProduct(id: number) {
    this.request.deleteProduct(id).subscribe(
      (result) => {
        this.result = result;
        alert(this.result);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  updateProduct(){
    var folio = (<HTMLInputElement>document.getElementById('folio')).value;
    var descripcion = (<HTMLInputElement>document.getElementById('descripcion')).value;
    var costo = (<HTMLInputElement>document.getElementById('costo')).value;
    var x: number = +costo;
    var cantidad = (<HTMLInputElement>document.getElementById('cantidad')).value;
    var y: number = +cantidad;
    
    var product: Product = new Product(this.data.id,folio,descripcion,x,y);
    this.request.updateProduct(product).subscribe(
      (status)=>{
        alert('Producto actualizado');
      },(error)=>{
        console.log(error);
        alert('Hubo un error contacte al administrador, gracias');
      }
    );
  }

  

  ngOnInit(): void {
  
  }

}

import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RequestServiceService } from '../request-service.service';

@Component({
  selector: 'app-product-detail-dialog',
  templateUrl: './product-detail-dialog.component.html',
  styleUrls: ['./product-detail-dialog.component.css']
})
export class ProductDetailDialogComponent implements OnInit {
  row;
  constructor(
    public dialogref: MatDialogRef<ProductDetailDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
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

  updateProduct(data:any){
    
    console.log("i win?");
    
    
  }

  ngOnInit(): void {
  }

}

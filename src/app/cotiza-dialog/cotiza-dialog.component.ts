import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Product } from '../Product';
import { RequestServiceService } from '../request-service.service';

@Component({
  selector: 'app-cotiza-dialog',
  templateUrl: './cotiza-dialog.component.html',
  styleUrls: ['./cotiza-dialog.component.css']
})
export class CotizaDialogComponent implements OnInit {
  row:Product[];
  cuenta:number = 0;
  constructor(
    public dialogref: MatDialogRef<CotizaDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Product[],
    private request: RequestServiceService,
  ) {
    this.row = data;
  }

  showData(){
    this.row.forEach((product)=>{
      this.cuenta += (product.cantidad*product.costo);
    })
  }

  pagar(){
    // generad un pdf con la información guardada
    let id:number;
    let n: number;
    let aux: Product;
    console.log(this.row.length)
    this.row.forEach(
      (product)=>{
        this.request.getProduct(product.id).subscribe(
          (product2)=>{
            aux = product2;
            aux.cantidad -= product.cantidad
            this.request.updateProduct(aux).subscribe(
              (status)=>{
                console.log(status)
              },(error)=>{
                console.log(error)
              }
            )
          }
        )
        
        
      }
    )
  }
  

  ngOnInit(): void {
    this.showData();
  }

}

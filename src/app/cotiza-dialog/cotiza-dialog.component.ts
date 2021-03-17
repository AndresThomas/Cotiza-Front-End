import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Product } from '../Product';

@Component({
  selector: 'app-cotiza-dialog',
  templateUrl: './cotiza-dialog.component.html',
  styleUrls: ['./cotiza-dialog.component.css']
})
export class CotizaDialogComponent implements OnInit {
  row:Product[];
  constructor(
    public dialogref: MatDialogRef<CotizaDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Product[],
  ) {
    this.row = data;
  }

  showData(){
    let total:number=0;
    this.row.forEach((product)=>{
      total += (product.cantidad*product.costo);
    })
    console.log(total,'total pagar');
  }
  

  ngOnInit(): void {
    this.showData();
  }

}

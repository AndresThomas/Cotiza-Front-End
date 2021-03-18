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
  cuenta:number = 0;
  constructor(
    public dialogref: MatDialogRef<CotizaDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Product[],
  ) {
    this.row = data;
  }

  showData(){
    this.row.forEach((product)=>{
      this.cuenta += (product.cantidad*product.costo);
    })
  }
  

  ngOnInit(): void {
    this.showData();
  }

}

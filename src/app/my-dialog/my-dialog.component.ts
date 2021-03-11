import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-my-dialog',
  templateUrl: './my-dialog.component.html',
  styleUrls: ['./my-dialog.component.css']
})
export class MyDialogComponent implements OnInit {
  row;

  productList: any[] = [];
  aux: any[] = [];
  constructor(
    public dialogref: MatDialogRef<MyDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    this.row = data;
  }

  addProduct(e: any, id: number) {
    if (e.target.checked) {
      console.log(id + 'ok');
      this.productList.push(id);
    } else {
      this.productList = this.productList.filter(m => m != id);
    }
    console.log(this.productList);
  }

  getProductList() {
    this.aux = this.productList;
    return this.aux;
  }

  ngOnInit(): void {
  }

}

import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-my-dialog',
  templateUrl: './my-dialog.component.html',
  styleUrls: ['./my-dialog.component.css']
})
export class MyDialogComponent implements OnInit {
  row;
  constructor(
    public dialogref: MatDialogRef<MyDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    ){
      this.row = data;
  }


  ngOnInit(): void {
  }

}

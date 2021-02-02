import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatDialogRef } from "@angular/material/dialog";
import { MyDialogComponent } from '../my-dialog/my-dialog.component';
import { RequestServiceService } from '../request-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  results: any ;
  

  constructor(
    public matDialog: MatDialog,
    private request: RequestServiceService
  ) { }

  extractData(){
    this.request.getProducts().subscribe(
      (results) => {
        this.results = results;
        console.log(this.results);
      },
      (error)=>{
        console.log(error)
      }
    )
  }

  
  openDialog() {
    
    const dialogRef = this.matDialog.open(MyDialogComponent, {
      width: '70%',
      height: '70%',
      data: this.results
    });
    
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    })
  }
  ngOnInit(): void {
    this.extractData();
  }

}

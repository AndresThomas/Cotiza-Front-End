import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatDialogRef } from "@angular/material/dialog";
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { MyDialogComponent } from '../my-dialog/my-dialog.component';
import { RequestServiceService } from '../request-service.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  results: any ;
  data:any;
  products: any[]=[];
  name: string = localStorage.getItem("name") || "";

  constructor(
    public matDialog: MatDialog,
    private request: RequestServiceService,
    private cookieService: CookieService,
    private router: Router,
  ) { }

  validation(){
    if(!this.cookieService.check('cookieLogin')){
      this.router.navigate(["/"]);   
    }
  }

  deleteProduct(e:any,id:number){
    
  }

  extractData(){
    this.request.getProducts().subscribe(
      (results) => {
        this.results = results;
        //console.log(this.results);
      },
      (error)=>{
        console.log(error)
      }
    )
  }

  
  openDialog() {
    this.extractData();    
    const dialogRef = this.matDialog.open(MyDialogComponent, {
      width: '70%',
      height: '70%',
      data: this.results
    });
    
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      this.data = result;
      for (let i = 0; i < this.data.length; i++) {
        
          this.request.getProduct(this.data[i]).subscribe(
            (product)=>{
              this.products.push(product);
            },(error)=>{
              console.log(error);
            }
            );
          
      }
      console.log(this.products,'-> products');
    })
  }
  ngOnInit(): void {
    this.validation();
    this.extractData();
  }

}

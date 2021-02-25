import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { MyDialogComponent } from '../my-dialog/my-dialog.component';
import { ProductDialogComponent } from '../product-dialog/product-dialog.component';
import { RequestServiceService } from '../request-service.service';

@Component({
  selector: 'app-almacen',
  templateUrl: './almacen.component.html',
  styleUrls: ['./almacen.component.css']
})
export class AlmacenComponent implements OnInit {

  constructor(
    public matDialog: MatDialog,
    private request: RequestServiceService,
    private cookieService: CookieService,
    private router: Router,
  ) { }

  results: any ;
  validation(){
    if(!this.cookieService.check('cookieLogin')){
      this.router.navigate(["/"]);   
    }
  }

  openDialog() {
    
    const dialogRef = this.matDialog.open(ProductDialogComponent, {
      width: '70%',
      height: '70%',
      
    });
    
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      this.extractData();
    })
  }

  closeDialog(){
    this.matDialog.closeAll();
    this.extractData();
  }

  extractData(){
    this.request.getProducts().subscribe(
      (results) =>{
        this.results = results;
      },
      (error)=>{
        console.log(error);
      }
    )
  }

  ngOnInit(): void {
    this.validation();
    this.extractData();
  }

}

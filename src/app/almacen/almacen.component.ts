import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ProductDetailDialogComponent } from '../product-detail-dialog/product-detail-dialog.component';
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
  ) {
   }

  

  results: any ;
  validation(){
    if(!this.cookieService.check('cookieLogin')){
      this.router.navigate(["/"]);   
    }
  }

  openProduct(product:any){
    const dialogRef = this.matDialog.open(ProductDetailDialogComponent,{
      width: '35%',
      height:'90%',
      data: product
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      this.extractData();
    });
    
  }

  addProduct() {
    const dialogRef = this.matDialog.open(ProductDialogComponent, {
      width: '70%',
      height: '70%',
    });
    
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      this.extractData();
    });
  }

  extractData(){
    this.request.getProducts().subscribe(
      (results) =>{
        this.results = results;
      },
      (error)=>{
        console.log(error);
        alert("Ha ocurrido un error, contacte al tecnico por favor");
      }
    )
  }

  ngOnInit(): void {
    this.validation();
    this.extractData();
  }

}

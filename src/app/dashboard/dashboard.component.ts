import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatDialogRef } from "@angular/material/dialog";
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { CotizaDialogComponent } from '../cotiza-dialog/cotiza-dialog.component';
import { MyDialogComponent } from '../my-dialog/my-dialog.component';
import { Product } from '../Product';
import { RequestServiceService } from '../request-service.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  results: any;
  data: any;
  products: Product[] = [];
  name: string = localStorage.getItem("name") || "";

  constructor(
    public matDialog: MatDialog,
    private request: RequestServiceService,
    private cookieService: CookieService,
    private router: Router,
  ) { }

  validation() {
    if (!this.cookieService.check('cookieLogin')) {
      this.router.navigate(["/"]);
    }
  }

  logOut(){
    this.cookieService.delete('cookieLogin');
    this.validation();
  }

  deleteProduct(e: any, key: number) {
    var productAux: any;
    var del: any;
    this.products.forEach(element => {

      if (element.id == key) {
        del = this.products.indexOf(element);
        productAux = element;
        this.products.splice(del, 1);
      }
    });
  }

  clean() {
    this.products = [];
  }

  total(e: any, id: number, costo: number) {
    var x = (<HTMLInputElement>document.getElementById('cantidadP' + id)).value;
    var y: number = +x;
    this.products.forEach((product) => {
      if (product.id == id) {
        product.cantidad = y;
      }
    })
  }

  extractData() {
    this.request.getProducts().subscribe(
      (results) => {
        this.results = results;
      },
      (error) => {
        console.log(error)
      }
    )
  }

  cotizar() {
    if(this.products.length > 0){
      const dialogRef = this.matDialog.open(CotizaDialogComponent, {
        width: '50%',
        height: '80%',
        data: this.products
      })
    }else{
      //alert('Debe registrar productos antes de cotizar');
      const dialogRef = this.matDialog.open(CotizaDialogComponent, {
        width: '50%',
        height: '80%',
        data: this.products
      })
    }
  }

  openDialog() {
    this.extractData();
    const dialogRef = this.matDialog.open(MyDialogComponent, {
      width: '70%',
      height: '60%',
      data: this.results
    });

    dialogRef.afterClosed().subscribe(result => {

      if (result.length > 0) {

        for (let i = 0; i < result.length; i++) {
          this.request.getProduct(result[i]).subscribe(
            (result) => {
              result.cantidad = 1;
              this.products.push(result);
            }, (error) => {
              console.log(error);
            }
          );
        }
      }
    })
  }
  ngOnInit(): void {
    this.validation();
    this.extractData();
  }

}

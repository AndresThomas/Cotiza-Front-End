import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Product } from '../Product';
import { RequestServiceService } from '../request-service.service';
import { PdfMakeWrapper } from 'pdfmake-wrapper';
import  pdfFonts   from 'pdfmake/build/vfs_fonts';
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

  generarPdf(){
    PdfMakeWrapper.setFonts(pdfFonts);
    const pdf = new PdfMakeWrapper();
 
    this.row.forEach(
      (product)=>{
        pdf.add(product.folio);
        pdf.add(product.descripcion);
        pdf.add(product.cantidad);
        pdf.add(product.costo);
        pdf.add((product.costo * product.cantidad));
        
        pdf.add('Total a pagar es de:'+this.cuenta);

        pdf.add('Esta cotizacion es valida por n días, luego los precios pueden variar');
        
      }
    )
 
pdf.create().open();
  }
  

  ngOnInit(): void {
    this.showData();
  }

}

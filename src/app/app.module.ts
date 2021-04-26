import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyDialogComponent } from './my-dialog/my-dialog.component';
import { MatCheckboxModule } from '@angular/material/checkbox/';
import { CookieService } from 'ngx-cookie-service';
import { AlmacenComponent } from './almacen/almacen.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductDialogComponent } from './product-dialog/product-dialog.component';
import { ProductDetailDialogComponent } from './product-detail-dialog/product-detail-dialog.component';
import { CotizaDialogComponent } from './cotiza-dialog/cotiza-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    RegisterComponent,
    MyDialogComponent,
    AlmacenComponent,
    ProductDialogComponent,
    ProductDetailDialogComponent,
    CotizaDialogComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule, 
    HttpClientModule, 
    BrowserAnimationsModule,
    MatDialogModule,
    MatCheckboxModule,
    NgbModule,
    
  ],
  entryComponents: [MyDialogComponent,ProductDialogComponent,ProductDetailDialogComponent],
  providers: [CookieService,],
  bootstrap: [AppComponent]
})
export class AppModule { }

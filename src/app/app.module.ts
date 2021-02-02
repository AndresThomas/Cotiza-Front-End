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

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    RegisterComponent,
    MyDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule, 
    HttpClientModule, 
    BrowserAnimationsModule,
    MatDialogModule,
    MatCheckboxModule
  ],
  entryComponents: [MyDialogComponent],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }

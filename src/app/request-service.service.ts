import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './Product';

@Injectable({
  providedIn: 'root'
})
export class RequestServiceService {

  constructor(private http: HttpClient) { }

  link: string = "https://cotiza-app.herokuapp.com/";
  link2: string = "http://localhost:8000/"

  postLogin(data: any) { return this.http.post(this.link, data); }

  postRegistro(data: any) { return this.http.post(this.link + 'register', data); }

  getProducts() { return this.http.get(this.link + 'products'); }

  postProducts(data: any) { return this.http.post(this.link + 'products', data); }

  deleteProduct(id: number) { return this.http.delete(this.link + 'products/details/' + id + '/'); }

  getProduct(id: number):Observable<Product> { return this.http.get<Product>(this.link + 'products/details/' + id + '/'); }

}

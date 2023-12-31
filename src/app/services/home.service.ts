import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../common/product';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private apiUrl : string = "http://localhost:8085/api/v1/home";

  constructor(private httpClient:HttpClient) { }

  getProducts():Observable<Product[]>{
    return this.httpClient.get<Product[]>(this.apiUrl);
  }

  getProductById(id:number):Observable<Product>{
    return this.httpClient.get<Product>(this.apiUrl+"/"+id);
  }
}

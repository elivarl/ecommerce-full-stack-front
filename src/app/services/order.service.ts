import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from '../common/order';
import { Observable } from 'rxjs';
import { HeaderService } from './header.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private apiUrl : string = "http://localhost:8085/api/v1/orders";
  private update: string ='update/state/order';

  constructor(private httpClient:HttpClient, private headerService : HeaderService) { }

  createOrder(order:Order):Observable<Order>{
    return this.httpClient.post<Order>(this.apiUrl, order, { headers: this.headerService.headers });
  }

  updateOrder(formData:any):Observable<any>{
    return this.httpClient.post(`${this.apiUrl}/${this.update}`, formData, { headers: this.headerService.headers });
  }

  getOrderByUser(userId:number):Observable<Order[]>{
    return this.httpClient.get<Order[]>(`${this.apiUrl}/by-user/${userId}`, { headers: this.headerService.headers });
  }

  getOrderById(orderId:number):Observable<Order>{
    return this.httpClient.get<Order>(`${this.apiUrl}/${orderId}`, { headers: this.headerService.headers });
  }
}

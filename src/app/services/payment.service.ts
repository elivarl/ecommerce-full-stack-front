import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataPayment } from '../common/data-payment';
import { Observable } from 'rxjs';
import { UrlPaypalResponse } from '../common/url-paypal-response';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  private apiUrl:string='http://localhost:8085/api/v1/payments';

  constructor(private http:HttpClient) { }

  getUrlPaypalPayment(dataPayment:DataPayment):Observable<UrlPaypalResponse>{
    return this.http.post<UrlPaypalResponse>(this.apiUrl, dataPayment);
  }

}

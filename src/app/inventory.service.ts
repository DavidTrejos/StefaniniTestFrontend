import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  private apiUrl = 'http://127.0.0.1:8000'; 

  constructor(private http: HttpClient) { }

  getProductTypes(): Observable<any> {
    return this.http.get(`${this.apiUrl}/list_product_types/`);
  }

  registerProduct(data: any): Observable<any> {

    const body = new HttpParams()
    .set('name', data['name'])
    .set('quantity', data['quantity'])
    .set('product_code', data['product_code'])
    .set('date', data['date'])
    .set('product_type_id', data['product_type_id'])
    .set('status', data['status']);

    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });
    return this.http.post(`${this.apiUrl}/register_inventory/`, body.toString(),{headers});
  }

  getInventory(): Observable<any> {
    return this.http.get(`${this.apiUrl}/list_inventory/`);
  }

  deliverProduct(productName: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/deliver_product/${productName}/`, {});
  }

  updateProduct(product: any, id: any): Observable<any>{

    const body = new HttpParams()
    .set('name', product['name'])
    .set('quantity', product['quantity'])
    .set('product_code', product['product_code'])
    .set('date', product['date'])
    .set('product_type_id', product['product_type_id'])
    .set('status', product['status']);

    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });
    return this.http.post(`${this.apiUrl}/update_product/${id}/`, body.toString(),{headers});
  }
}

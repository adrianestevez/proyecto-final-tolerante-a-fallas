import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  endpoint = 'http://localhost:8000/api/products';

  constructor(private http: HttpClient) { }

  all(): Observable<Product[]> {
    return this.http.get<Product[]>(this.endpoint);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.endpoint}/${id}`);
  }

  create(product: any): Observable<Product> {
    return this.http.post<Product>(this.endpoint, product);
  }

  update(id: number, data:any): Observable<Product> {
    return this.http.put<Product>(`${this.endpoint}/${id}`, data);
  }

  get(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.endpoint}/${id}`);
  }
}

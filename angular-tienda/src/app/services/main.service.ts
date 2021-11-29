import { Product } from './../interfaces/product';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  endpoint1 = 'http://localhost:8000/api/products';
  endpoint2 = 'http://localhost:8001/api/products';

  constructor(private http: HttpClient) { }

  all(): Observable<Product[]> {
    return this.http.get<Product[]>(this.endpoint1);
  }

  like(id: number): Observable<Product> {
    return this.http.post<Product>(`${this.endpoint2}/${id}/like`, {});
  }
}

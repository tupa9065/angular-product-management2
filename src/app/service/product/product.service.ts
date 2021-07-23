import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {Product} from '../../model/product';

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<any> {
    return this.http.get<any>(`${API_URL}/products`);
  }

  getById(id: number): Observable<Product> {
    return this.http.get<Product>(`${API_URL}/products/${id}`);
  }

  save(product: Product): Observable<any> {
    product.category = {id: product.category};
    console.log('product created >>>', product);
    return this.http.post<Product>(`${API_URL}/products`, product);
  }

  update(id: number, product: Product): Observable<any> {
    product.category = {id: product.category};
    return this.http.put<Product>(`${API_URL}/products/${id}`, product);
  }

  delete(id: number): Observable<any> {
    return this.http.delete<any>(`${API_URL}/products/${id}`);
  }
}

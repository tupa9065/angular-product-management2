import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {Product} from '../../model/product';
import {HttpClient} from '@angular/common/http';
import {Category} from '../../model/category';

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Category[]> {
    return this.http.get<Category[]>(`${API_URL}/categories`);
  }

  getById(id: number): Observable<Category> {
    return this.http.get<Category>(`${API_URL}/categories/${id}`);
  }

  save(category: Category): Observable<any> {
    return this.http.post<Category>(`${API_URL}/categories`, category);
  }

  update(id: number, category: Category): Observable<any> {
    return this.http.put<Category>(`${API_URL}/categories/${id}`, category);
  }

  delete(id: number): Observable<any> {
    return this.http.delete<any>(`${API_URL}/categories/${id}`);
  }
}

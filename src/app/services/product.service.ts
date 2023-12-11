import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../common/product';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = "http://localhost:8080/api";

  constructor(private httpClient: HttpClient) { }

  getProuducts(): Observable<Product[]> {
    const targetUrl = `${this.baseUrl}/products`;
    
    return this.getProductList(targetUrl);
  }

  getProductsByCategoryId(id: string): Observable<Product[]> {
    const targetUrl = `${this.baseUrl}/products/search/findByCategoryId?id=${id}`;
    
    return this.getProductList(targetUrl);
  }

  // Change from private to public
  public getProductList(targetUrl: string): Observable<Product[]> {
    return this.httpClient.get<GetResponseProduct>(targetUrl).pipe(
      map(response => response._embedded.products)
    );
  }
}

interface GetResponseProduct {
  _embedded: {
    products: Product[];
  };
}

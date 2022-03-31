import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from './../../../../environments/environment';
import { Product } from '../../models/Product';
import { Response } from '../../models/Response';
import { ResponseProduct, ResponseUser } from '../../models/BodyResponses';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private http: HttpClient
  ) { }

  getAllProducts() {
    return this.http.get<ResponseProduct>(`${environment.url_api}/Products`);
  }

  getProduct(id: number) {
    return this.http.get<Product>(`${environment.url_api}/Products/${id}`);
  }

  createProduct(product: Product) {
    return this.http.post(`${environment.url_api}/Products`, product);
  }

  updateProduct(id,changes: Partial<Product>) {
    return this.http.put(`${environment.url_api}/Products/${id}`, changes);
  }

  deleteProduct(id: string) {
    return this.http.delete(`${environment.url_api}/Products/${id}`).pipe(catchError(this.errorHandler))
  }

  errorHandler(error){
    return throwError(error.error.body || 'Server Error')
  }
}

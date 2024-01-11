import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProduct } from 'src/app/interface/IProduct';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products: string = environment.productAPI;

  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get<IProduct[]>(this.products);
  }
}

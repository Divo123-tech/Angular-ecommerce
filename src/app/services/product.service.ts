import { Injectable, signal } from '@angular/core';
import { Product } from '../models/products.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor() {}

  async getProducts() {
    const res = await fetch(
      'https://fakestoreapi.com/products/category/electronics'
    );
    const data = await res.json();
    return data;
  }
}

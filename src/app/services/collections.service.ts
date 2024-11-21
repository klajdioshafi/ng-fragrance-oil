import { Injectable, signal } from '@angular/core';
import { Product } from '../custom/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CollectionsService {

  productsSig = signal<Product[]>([]);

  constructor() { }

  addProduct(product: Product): void {
    this.productsSig.update((products) => [...products, product]);
  }

  changeProduct(id: string, updatedProduct: Product): void {
    this.productsSig.update((products) => products.map((product) => product.prodId === id ? { ...product, updatedProduct} : product));
  }

  removeProduct(id: string): void {
    this.productsSig.update((products) => products.filter((product) => product.prodId !== id));
  }
}

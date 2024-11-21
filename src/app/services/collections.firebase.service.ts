import { inject, Injectable } from '@angular/core';
import { collection, Firestore } from '@angular/fire/firestore/firebase';
import { Observable } from 'rxjs';
import { Product } from '../custom/models/product.model';
import { collectionData } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CollectionsFirebaseService {

  firestore = inject(Firestore);
  products = collection(this.firestore, 'products');

  constructor() { }

  getProducts(): Observable<Product[]> {
    return collectionData(this.products, {
      idField: 'id'
    }) as Observable<Product[]>;
  }
}

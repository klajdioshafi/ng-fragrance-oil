import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CollectionsService } from '../../services/collections.service';
import { CollectionsFirebaseService } from '../../services/collections.firebase.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit{

  categories: string[] = ['All Products','Beauty Tools','Nail Care','Hair Care','Fragrance','Skincare']

  selectedCategory: string = this.categories[1];

  constructor(private collectionsFirebaseService: CollectionsFirebaseService, private collectionService: CollectionsService) {

  }

  ngOnInit(): void {
    this.collectionsFirebaseService.getProducts().subscribe((products) => {
      this.collectionService.productsSig.set(products);
    });
  }

  onChangeCategorySelection(selectedCategory: string | undefined) {
    console.log(selectedCategory);
  }
}

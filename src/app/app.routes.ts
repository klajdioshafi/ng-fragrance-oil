import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { CollectionsComponent } from './collections/collections.component';
import { CategoryComponent } from './category/category.component';
import { ProductDetailsComponent } from './collections/product-details/product-details.component';
import { ProductListComponent } from './collections/product-list/product-list.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'about', component: AboutComponent },
    { path: 'collections', component: CollectionsComponent, 
        children: [
            { path: 'product-list', component: ProductListComponent },
            { path: 'product-1', component: ProductDetailsComponent }
        ] 
    },
    { path: 'categories', component: CategoryComponent }
];
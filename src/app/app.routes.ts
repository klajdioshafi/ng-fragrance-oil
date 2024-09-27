import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { CollectionsComponent } from './collections/collections.component';
import { CategoryComponent } from './category/category.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'about', component: AboutComponent },
    { path: 'product-list', component: CollectionsComponent },
    { path: 'categories', component: CategoryComponent }
];

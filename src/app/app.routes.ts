import { Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';
import { TodolistComponent } from './todolist/todolist.component';
import { ListingComponent } from './listing/listing.component';
import { FormsComponent } from './forms/forms.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'listing', component: ListingComponent },
  { path: 'todolist', component: TodolistComponent },
  { path: 'forms', component: FormsComponent },
  // If I wanted to direct user to a specific car listing, I could use the following:
  // { path: 'details/:id', component: DetailsComponent },
];

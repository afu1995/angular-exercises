import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  template: `
    <div class="link-container">
      <a class="card-link" [routerLink]="['listing']">
        <span class="icon">🚗</span>
        <h2>Car Wishlist</h2>
        <p>Save a car for later purchase!</p>
      </a>

      <a class="card-link" [routerLink]="['todolist']">
        <span class="icon">✓</span>
        <h2>Daily Activities</h2>
        <p>Check a checkbox for daily activities!</p>
      </a>

      <a class="card-link" [routerLink]="['forms']">
        <span class="icon">🎬</span>
        <h2>Cinema Review</h2>
        <p>Write a review on Slagelse Cinema!</p>
      </a>
    </div>

    <router-outlet />
  `,
  styleUrls: ['./styles.css'],
})
export class HomeComponent {}

import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Car } from '../car';

@Component({
  selector: 'app-listing',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>Saved Cars {{ savedCarList.length }}</h1>
    <section class="container">
      @for(carEntry of carList; track carEntry){
      <article class="listing">
        <div class="image-parent">
          <img class="product-image" src="https://placehold.co/100x100" />
        </div>
        <section class="details">
          <p class="title">{{ carEntry.make }} - {{ carEntry.model }}</p>
          <hr />
          <p class="detail">
            <span>Year</span>
            <span>
              {{ carEntry.year }}
            </span>
          </p>
          <div class="detail">
            <span>Transmission</span>
            <span>
              {{ carEntry.transmission }}
            </span>
          </div>
          <p class="detail">
            <span>Mileage</span>
            <span>
              {{ carEntry.miles }}
            </span>
          </p>
          <p class="detail">
            <span>Price</span>
            <span>
              {{ carEntry.price }}
            </span>
          </p>
        </section>
        <button (click)="addCarToSaved(carEntry)">Save car</button>
      </article>
      }
    </section>

    <article>
      <h2>Saved Cars</h2>
      <ul>
        @for(car of savedCarList; track car){
        <li>{{ car.make }} - {{ car.model }}</li>
        }
      </ul>
    </article>
  `,
  styleUrls: ['./styles.css'],
})
export class ListingComponent {
  savedCarList: Car[] = [];
  carList: Car[] = [
    {
      make: 'Foyoda',
      model: 'Famery',
      miles: 54354,
      price: 1000,
      year: 2022,
      transmission: 'Automatic',
    },
    {
      make: 'Ronda',
      model: 'Disaccord',
      miles: 100000,
      price: 230,
      year: 1991,
      transmission: 'Automatic',
    },
    {
      make: 'Specific Motors',
      model: 'Spoke',
      miles: 100000,
      price: 230,
      year: 1991,
      transmission: 'Automatic',
    },
    {
      make: 'Fjord',
      model: 'Pocus',
      miles: 1,
      price: 22330,
      year: 2023,
      transmission: 'Automatic',
    },
  ];
  addCarToSaved(car: Car) {
    this.savedCarList.push(car);
  }
}

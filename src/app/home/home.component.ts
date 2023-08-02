import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HousingLocationComponent } from "../housing-location/housing-location.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HousingLocationComponent,
  ],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by city">
        <button class="prim ary" type="button">Search</button>
      </form>
    </section>
    <section>
      <app-housing-location />
    </section>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

}

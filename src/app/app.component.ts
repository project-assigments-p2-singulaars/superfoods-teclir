import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FoodListComponent } from "./foods/food-list/food-list.component";
import { Foods } from './shared/interfaces/foods';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, FoodListComponent]
})
export class AppComponent {
  title = 'superfoods';
filteredFoods: Foods[] = [];
}

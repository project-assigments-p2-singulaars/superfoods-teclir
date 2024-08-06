import { Component } from '@angular/core';
import { ListComponent } from "./foods/components/food-list/food-list.component";
import { Foods } from './shared/interfaces/foods';
import { RouterOutlet } from '@angular/router';
import { FoodComponent } from './foods/food.component';
import { SearchComponent } from './foods/components/search/search.component';
import { MenuComponent } from './foods/components/menu/menu.component';
import { HeaderComponent } from './foods/components/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [RouterOutlet, FoodComponent, SearchComponent, MenuComponent, HeaderComponent]
})
export class AppComponent {
title = 'angular-routing';
}

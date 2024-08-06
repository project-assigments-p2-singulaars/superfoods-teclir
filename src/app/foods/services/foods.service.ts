import { computed, Injectable, signal } from '@angular/core';
import foods from '../../data/foods';
import { Foods } from '../../shared/interfaces/foods';

@Injectable({
  providedIn: 'root'
})
export class FoodsService {
  foods = signal(foods);

  text = signal("");

  filterArray = computed(() => 
    this.foods().filter((food) => 
      food.name.toLowerCase().trim().includes(this.text().toLowerCase().trim())));

  addFood(food: Foods) {
    this.foods.update(v => 
      [food].concat(v))
  }
}

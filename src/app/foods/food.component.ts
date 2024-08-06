import { Component, EventEmitter, inject, OnInit, Output, input } from '@angular/core';
import { FoodsService } from './services/foods.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Foods } from '../shared/interfaces/foods';
import { MenuService } from './services/menu.service';
import { ListComponent } from './components/food-list/food-list.component';
import { FormComponent } from './components/form/form.component';
import { HeaderComponent } from "./components/header/header.component";

@Component({
  selector: 'app-food',
  standalone: true,
  imports: [ListComponent, FormComponent, HeaderComponent],
  templateUrl: './food.component.html',
  styleUrl: './food.component.scss'
})

  export class FoodComponent implements OnInit {
    private foodsService = inject(FoodsService);
    private formBuilder = inject(FormBuilder);
    private menuService = inject(MenuService);
    
    foods = this.foodsService.filterArray;
    foodForm!: FormGroup;
    
    newFood: Foods = {
      name: "",
      calories: 0,
      image: "",
      quantity: 1,
      id: 0
    }
    
    ngOnInit(): void {
      this.foodForm = this.formBuilder.group(this.newFood)
    }
    
    onSubmit(food: Foods) {
      this.foodsService.addFood(food);
    }
    
    onFoodMenu(food: Foods) {
      this.menuService.addToMenu(food);
    }
    }


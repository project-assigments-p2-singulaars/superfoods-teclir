import { Component, Input, OnInit } from '@angular/core';
import { Foods } from '../../shared/interfaces/foods';
import { FoodsService } from '../services/foods.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-food-list',
  standalone: true,
  imports: [FoodListComponent, FormsModule],
  templateUrl: './food-list.component.html',
  styleUrl: './food-list.component.scss'
})
export class FoodListComponent implements OnInit{
foods!: Foods[];
inputValue: any;
@Input() filteredFoods!: Foods[];
constructor (private foodsService:FoodsService){}

ngOnInit(): void {
  this.foods = this.foodsService.getAllFoods() 
  console.log(this.foods)
}

searchFood() {
  this.filteredFoods = this.foods.filter((foods:Foods) =>
    foods.name.toLowerCase().includes (this.inputValue.toLowerCase())
  )
}
}

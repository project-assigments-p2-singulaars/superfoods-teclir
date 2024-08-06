import { Component, EventEmitter, input, Input, OnInit, Output } from '@angular/core';
import { Foods } from '../../../shared/interfaces/foods';
import { FoodsService } from '../../services/foods.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-food-list',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './food-list.component.html',
  styleUrl: './food-list.component.scss',
  
})

export class ListComponent {
  foods = input<Foods[]>();

  @Output() sentFoodToMenu = new EventEmitter<Foods>();

  addToMenu(food: Foods) {
    this.sentFoodToMenu.emit(food)
  }
}

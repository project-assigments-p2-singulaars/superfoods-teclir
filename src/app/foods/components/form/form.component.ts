import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Foods } from '../../../shared/interfaces/foods'; import { CommonModule } from '@angular/common';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { SearchComponent } from '../search/search.component';

@Component({
  selector: 'app-add-food-form',
  standalone: true,
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
  imports: [ReactiveFormsModule, CommonModule, SearchComponent]
})
export class FormComponent {
@Input() foodForm!: FormGroup;
@Output() sentForm = new EventEmitter <Foods>();
isVisible: boolean = false;
showForm(){
  this.isVisible = true;
}
hideForm(){
  this.isVisible = false;
}
submit() {
  const food: Foods = {
    name: this.foodForm.controls['name'].value,
    calories: this.foodForm.controls['calories'].value,
    image: this.foodForm.controls['image'].value,
    quantity: this.foodForm.controls['quantity'].value,
    id: 0
  }
  this.sentForm.emit(food);
  this.hideForm();
}
}
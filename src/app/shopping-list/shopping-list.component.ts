import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.modal';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Egg', 12),
    new Ingredient('Milk', 2),
    new Ingredient('Carrot', 5),
    new Ingredient('Cheese', 2),
    new Ingredient('Curry Leaves', 1),
  ];
  constructor() {}

  ngOnInit(): void {}
}

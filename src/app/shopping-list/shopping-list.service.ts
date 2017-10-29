import {Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';

@Injectable()
export class ShoppingListService {

  constructor() {
  }

  private _ingredients: Ingredient[] = [new Ingredient('Masala', 10)];


  get ingredients(): Ingredient[] {
    return this._ingredients;
  }

  set ingredients(value: Ingredient[]) {
    this._ingredients = value;
  }

  addIngredient(ingredient: Ingredient) {
    this._ingredients.push(ingredient);
  }
}

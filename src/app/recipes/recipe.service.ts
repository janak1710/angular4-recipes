import {EventEmitter, Injectable} from '@angular/core';
import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/ingredient.model';

@Injectable()
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe('TestRecipe1', 'TestRecipeDesc1',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Chicken-kathi-roll-recipe.jpg/1024px-Chicken-kathi-roll-recipe.jpg',
      [new Ingredient('chili', 1), new Ingredient('onion', 2)]),
    new Recipe('TestRecipe2', 'TestRecipeDesc2',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Chicken-kathi-roll-recipe.jpg/1024px-Chicken-kathi-roll-recipe.jpg',
      [new Ingredient('salt', 1), new Ingredient('spinach', 2)]),
  ];

  selectRecipe = new EventEmitter<Recipe>();

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }

  setRecipes(value: Recipe[]) {
    this.recipes = value;
  }

  constructor() {
  }

}

import {EventEmitter, Injectable} from '@angular/core';
import {Recipe} from './recipe.model';

@Injectable()
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe('TestRecipe1', 'TestRecipeDesc1',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Chicken-kathi-roll-recipe.jpg/1024px-Chicken-kathi-roll-recipe.jpg'),
    new Recipe('TestRecipe2', 'TestRecipeDesc2',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Chicken-kathi-roll-recipe.jpg/1024px-Chicken-kathi-roll-recipe.jpg'),
    new Recipe('TestRecipe3', 'TestRecipeDesc3',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Chicken-kathi-roll-recipe.jpg/1024px-Chicken-kathi-roll-recipe.jpg'),
    new Recipe('TestRecipe4', 'TestRecipeDesc4',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Chicken-kathi-roll-recipe.jpg/1024px-Chicken-kathi-roll-recipe.jpg')
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
import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeSelectedEvent = new EventEmitter<Recipe>()

  recipes: Recipe[] = [
    new Recipe('TestRecipe1', 'TestRecipeDesc1',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Chicken-kathi-roll-recipe.jpg/1024px-Chicken-kathi-roll-recipe.jpg'),
    new Recipe('TestRecipe2', 'TestRecipeDesc2',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Chicken-kathi-roll-recipe.jpg/1024px-Chicken-kathi-roll-recipe.jpg'),
    new Recipe('TestRecipe3', 'TestRecipeDesc3',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Chicken-kathi-roll-recipe.jpg/1024px-Chicken-kathi-roll-recipe.jpg'),
    new Recipe('TestRecipe4', 'TestRecipeDesc4',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Chicken-kathi-roll-recipe.jpg/1024px-Chicken-kathi-roll-recipe.jpg')
  ];

  constructor() {
  }

  ngOnInit() {
  }

  recipeSelected(recipe: Recipe) {
    this.recipeSelectedEvent.emit(recipe);
  }

}

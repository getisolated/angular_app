import { Injectable, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {

    recipeChanged = new Subject<Recipe[]>();

    recipeSelected = new Subject<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('Chawarma', 'This is a Chawarma!','https://assets.afcdn.com/recipe/20151231/31940_w1024h576c1cx2144cy1424.jpg',
        [
            new Ingredient('Chicken', 1),
            new Ingredient('Bread', 2),
            new Ingredient('Onion', 1),
            new Ingredient('Lettuce', 3)
        ]),
        new Recipe('Frite Omelette', 'This is a test recipe!','http://dziriya.net/wp-content/uploads/2020/07/frites-omelette.jpg',
        [
            new Ingredient('French Fries', 10),
            new Ingredient('Eggs', 3)
        ])
      ];

      constructor(private slService: ShoppingListService) {

      }

      setRecipes(recipes: Recipe[]) {
        this.recipes = recipes;
        this.recipeChanged.next(this.recipes.slice());
      }

      getRecipes() {
          return this.recipes.slice();
      }

      getRecipe(index: number) {
          return this.recipes[index];
      }

      addToSL(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
      }

      addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipeChanged.next(this.recipes.slice());
      }

      updateRecipe(index: number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe;
        this.recipeChanged.next(this.recipes.slice());
      }

      deleteRecipe(index: number) {
          this.recipes.splice(index, 1);
          this.recipeChanged.next(this.recipes.slice())
      }

}
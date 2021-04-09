import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('Chawarma', 'This is a Chawarma!','https://assets.afcdn.com/recipe/20151231/31940_w1024h576c1cx2144cy1424.jpg',
        [
            new Ingredient('Chicken', 1),
            new Ingredient('Bread', 2),
            new Ingredient('Onion', 1),
            new Ingredient('Lettuce', 3)
        ]),
        new Recipe('Frite Omelette', 'This is a test recipe!','https://lh3.googleusercontent.com/proxy/KrF87GZtrnJ9pXdX3ZQxhxi9mZTRvN32ryRABFc1F0doV3LvVM8tTX7aSvxlliDY1CB1zQKok23KfZyMp-bh-6JpMPummgb7iOrN3g6QziHDVdKKI3HwUFM',
        [
            new Ingredient('French Fries', 10),
            new Ingredient('Eggs', 3)
        ])
      ];

      constructor(private slService: ShoppingListService) {

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

}
import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http'

import { RecipeService } from "../recipes/recipe.service";
import { Recipe } from "../recipes/recipe.model";

@Injectable({providedIn:'root'})
export class DataStorageService {

    constructor(private http: HttpClient, private recipeService: RecipeService) {}

    storeRecipes() {
        const recipes = this.recipeService.getRecipes();
        this.http.put('https://first-project-f3151-default-rtdb.europe-west1.firebasedatabase.app/recipes.json', recipes).subscribe(res => {
            console.log(res);
        });
    };

    fetchRecipes() {
        this.http.get<Recipe[]>('https://first-project-f3151-default-rtdb.europe-west1.firebasedatabase.app/recipes.json').subscribe(recipes => {
            this.recipeService.setRecipes(recipes);
        });
    }

}
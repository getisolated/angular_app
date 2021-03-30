import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Test Recipe', 'This is a test recipe!','https://www.seasonsandsuppers.ca/wp-content/uploads/2014/01/new-poutine-1.jpg'),
    new Recipe('Test Recipe', 'This is a test recipe!','https://www.seasonsandsuppers.ca/wp-content/uploads/2014/01/new-poutine-1.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

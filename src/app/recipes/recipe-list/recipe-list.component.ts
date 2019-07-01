import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
@Output()  recipeWasSelected= new EventEmitter<Recipe>();
recipes:Recipe[]=[
  new Recipe('Delicious Egg Salad for Sandwiches','This is a wonderful-tasting egg salad sandwich that you will definitely devour. Its really good on rye.','https://images.media-allrecipes.com/userphotos/720x405/191517.jpg'),
  new Recipe('Pineapple Sticky Ribs','Sticky ribs come out tender and delicious with no pre-boiling involved.','https://images.media-allrecipes.com/userphotos/560x315/4039350.jpg'),
  new Recipe('Worlds Best Lasagna','It takes a little work, but it is worth it.','https://images.media-allrecipes.com/userphotos/560x315/3359675.jpg'),
  new Recipe('Penne with Chicken and Asparagus','A light but super-tasty pasta dish, with fresh asparagus cooked in broth with sauteed garlic and seasoned chicken.','https://images.media-allrecipes.com/userphotos/560x315/226134.jpg'),
  new Recipe('Fluffy Pancakes','Tall and fluffy. These pancakes are just right. Topped with strawberries and whipped cream, they are impossible to resist.','https://images.media-allrecipes.com/userphotos/560x315/5079227.jpg'),
  new Recipe('Good Old Fashioned Pancakes','This is a great recipe that I found in my Grandma"s recipe book. Judging from the weathered look of this recipe card, this was a family favorite.','https://images.media-allrecipes.com/userphotos/560x315/4948036.jpg'),

];
  constructor() { }

  ngOnInit() {
  }
onRecipeSelected(recipe: Recipe){
this.recipeWasSelected.emit(recipe)
}
}

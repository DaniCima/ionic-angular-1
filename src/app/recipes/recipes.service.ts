import { Injectable } from '@angular/core';
import { Recipe } from './recipes.model';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Schnitzel',
      imageURL:
        'https://www.mitiendavegana.com/wp-content/uploads/2020/04/libritos-veganos.jpg',
      ingredients: ['Apple', 'cinnamon', 'lemon'],
    },
    {
      id: 'r2',
      title: 'Paella',
      imageURL:
        'https://www.veganissima.es/media/cache/1x1/recipe/135/images/paella-valenciana-con-heura-5f10a05d2ed63.jpeg',
      ingredients: ['rice', 'beans', 'salt'],
    },
  ];

  constructor() {}

  getAllRecipes() {
    return [...this.recipes];
  }
  getRecipe(recipeId: string) {
    return {
      ...this.recipes.find((recipe) => {
        return recipe.id === recipeId;
      }),
    };
  }
  deleteRecipe(recipeId: string) {
    this.recipes = this.recipes.filter((recipe) => {
      return recipe.id !== recipeId;
    });
  }
}

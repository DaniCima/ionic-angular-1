import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Recipe } from '../recipes.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit, OnDestroy {
  loadedRecipe: Recipe;

  constructor(
    private activatedRoute: ActivatedRoute,
    private recipesServices: RecipesService,
    private router: Router,
    private alerteCtrl: AlertController
  ) {}

  ngOnInit() {
    console.log('ng ON INIT');
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      if (!paramMap.has('recipeId')) {
        //redirect
        this.router.navigate(['/recipes']);
        return;
      }
      const recipeId = paramMap.get('recipeId');
      this.loadedRecipe = this.recipesServices.getRecipe(recipeId);
    });
  }

  ionViewWillEnter() {
    console.log('ionViewWillEnter');
  }
  ionViewDidEnter() {
    console.log('ionViewDidEnter');
  }
  ionViewWillLeave() {
    console.log('ionViewWillLeave');
  }
  ionViewDidLeave() {
    console.log('ionViewDidLeave');
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }

  onDeleteRecipe() {
    this.alerteCtrl
      .create({
        header: 'Are you sure?',
        message: 'Do you really whant to delete the recipe?',
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
          },
          {
            text: 'Delete',
            handler: () => {
              this.recipesServices.deleteRecipe(this.loadedRecipe.id);
              this.router.navigate(['/recipes']);
            },
          },
        ],
      })
      .then((alertEl) => {
        alertEl.present();
      });
  }
}

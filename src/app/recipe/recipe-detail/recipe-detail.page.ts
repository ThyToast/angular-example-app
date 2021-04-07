import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { AlertController } from "@ionic/angular";
import { Recipe } from "../recipe.model";
import { RecipesService } from "../recipes.service";

@Component({
  selector: "app-recipe-detail",
  templateUrl: "./recipe-detail.page.html",
  styleUrls: ["./recipe-detail.page.scss"],
})
export class RecipeDetailPage implements OnInit, OnDestroy {
  loadedRecipe: Recipe;

  constructor(
    private activatedRoute: ActivatedRoute,
    private recipesService: RecipesService,
    private router: Router,
    private alertController: AlertController
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      if (!paramMap.has("recipeId")) {
        this.router.navigate(["/recipe"]);
        return;
      }
      const recipeId = paramMap.get("recipeId");
      this.loadedRecipe = this.recipesService.getRecipes(recipeId);
    });
  }

  ionViewDidEnter() {
    console.log("ionViewDidEnter");
  }

  ngOnDestroy(): void {
    console.log("ngOnDestroy");
  }

  async onDeleteRecipe() {
    const alert = await this.alertController.create({
      header: "Deleting recipe",
      message: "Confirm action",
      buttons: [
        { text: "Cancel", role: "cancel" },
        {
          text: "Delete",
          handler: () => {
            this.recipesService.deleteRecipes(this.loadedRecipe.id);
            this.router.navigate(["/recipe"]);
          },
        },
      ],
    });
    await alert.present();
  }
}

import { Component, OnInit } from "@angular/core";
import { Recipe } from "./recipe.model";

@Component({
  selector: "app-recipe",
  templateUrl: "./recipe.page.html",
  styleUrls: ["./recipe.page.scss"],
})
export class RecipePage implements OnInit {
  recipes: Recipe[] = [
    {
      id: "1",
      title: "borgor",
      imageUrl:
        "https://i1.wp.com/klfoodie.com/wp-content/uploads/2018/09/39152495_480504299128910_8855248684812599296_n-1.jpg?resize=1080%2C810&ssl=1",
      ingredients: ["bun", "cheese", "patty"],
    },
    {
      id: "2",
      title: "kek",
      imageUrl:
        "https://i1.wp.com/klfoodie.com/wp-content/uploads/2018/09/39152495_480504299128910_8855248684812599296_n-1.jpg?resize=1080%2C810&ssl=1",
      ingredients: ["flour", "sugar", "egg"],
    },
    {
      id: "3",
      title: "fries",
      imageUrl:
        "https://i1.wp.com/klfoodie.com/wp-content/uploads/2018/09/39152495_480504299128910_8855248684812599296_n-1.jpg?resize=1080%2C810&ssl=1",
      ingredients: ["potat", "oil", "salt"],
    },
  ];

  constructor() {}

  ngOnInit() {}
}

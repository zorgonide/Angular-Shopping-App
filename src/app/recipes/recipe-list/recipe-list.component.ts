import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('test recipe', 'this is a test', 'https://www.simplyrecipes.com/thmb/2Ggz7Ua9qkBAfVfl4FGh2wlNeBc=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Quesadilla-LEAD-5-55da42a2a306497c85b1328385e44d85.jpg'),
    new Recipe('test recipe 2', 'this is a test 2', 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2020%2F05%2F08%2FChewy-Peanut-Butter-Brownies-by-abcdeelishus.jpg&q=85')
  ]
  constructor() { }

  ngOnInit(): void {
  }

}

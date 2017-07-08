import { Component, OnInit } from '@angular/core';

import { Recipe } from '../../models/recipe';
@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  recipe: Recipe = new Recipe('Broccoli Crambergully', `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).`, 'data:image/jpeg;base64,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');

  constructor() { }

  ngOnInit() {
  }

}

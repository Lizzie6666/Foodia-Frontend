import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrl: './recipe.component.css'
})
export class RecipeComponent implements OnInit{
  showCreateEditRecipeComponent = false;
  constructor(private router: Router,  public route:ActivatedRoute) { }

  ngOnInit(): void {
  }
 goToIngredients() {
    this.router.navigate(['/ingredient/list']);
  }
    navigateToCreateEdit() {
      this.router.navigate(['/recipe/create-edit']);
    }
 
}

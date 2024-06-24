import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Recipe } from '../../../model/recipe';
import { RecipeService } from '../../../service/recipe.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import { MatTableDataSource } from '@angular/material/table';
import { ConfirmationComponent } from './confirmation/confirmation.component';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css',
})
export class RecipeListComponent implements OnInit {
  dialogOpen = false;
  recipes: Recipe[] = [];
  type: any[] = [
    { name: 'Vegetariano' },
    { name: 'Vegano' },
    { name: 'Omnívoro' },
    { name: 'Pescetariano' }
  ];

  constructor(private recipeService: RecipeService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.recipeService.list().subscribe((data: Recipe[]) => {
      this.recipes = data;
    });
  }

  toggleFavorite(recipe: Recipe): void {
    recipe.favorite = !recipe.favorite;
  }
  openDialog(id: number) {
    const dialogRef = this.dialog.open(ConfirmationComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.recipeService.delete(id).subscribe(() => {
          this.recipeService.list().subscribe(data => {
            this.recipeService.setList(data);
          });
        });
      } else {
        console.log("FALSE");
      }
    });
  }

  search(title: string): void {
    this.recipeService.search(title).subscribe((data: Recipe[]) => {
      this.recipes = data;
    });
  }
  editRecipe(recipe: Recipe) {
    
   }

  viewRecipe(recipe: Recipe): void {
    // Abrir el diálogo solo si no hay otro diálogo abierto
    if (!this.dialog.openDialogs.length) {
      const dialogRef: MatDialogRef<DialogComponent> = this.dialog.open(DialogComponent, {
        width: '600px',
        data: recipe,
      });

      dialogRef.afterClosed().subscribe(() => {
        // Aquí puedes realizar acciones después de cerrar el diálogo si es necesario
      });
    }
  }
}
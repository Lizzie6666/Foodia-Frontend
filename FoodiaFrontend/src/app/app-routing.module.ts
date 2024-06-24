import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEditComponent } from './component/ingredient/create-edit/create-edit.component';
import { IngredientComponent } from './component/ingredient/ingredient.component';
import { IngredientListComponent } from './component/ingredient/ingredient-list/ingredient-list.component';

const routes: Routes = [
  {
    path:'ingredient',component:IngredientComponent,children:[
      {
        path:'list',component:IngredientListComponent
      },
      {
        path:'nuevo',component:CreateEditComponent, 
      }
      ,
      {
        path:'edit',component:CreateEditComponent, 
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

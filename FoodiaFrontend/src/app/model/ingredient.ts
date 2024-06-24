import { IngredientCategory } from "./ingredient-category";


export class Ingredient {
    id:number=0;
    name:String="";
    calories:number=0;
    ingredientCategory:IngredientCategory=new IngredientCategory();
  selected: any;

}

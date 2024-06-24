import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Ingredient } from '../../../model/ingredient';
import { IngredientService } from '../../../service/ingredient.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-edit',
  templateUrl: './create-edit.component.html',
  styleUrl: './create-edit.component.css'
})
export class CreateEditComponent {
  
  form: FormGroup = new FormGroup({});
  mensaje: string = '';
  ingredient:Ingredient=new Ingredient();
  edicion: boolean = false;
  id:number=0;
  constructor(
    private ingredientService:IngredientService,
    private router: Router,
    private route: ActivatedRoute
  ){}

  init() {
    if (this.edicion) {
      this.ingredientService.listById(this.id).subscribe((data) => {
        this.form = new FormGroup({
          id: new FormControl(data.id),
          name: new FormControl(data.name),
          calories: new FormControl(data.calories),
        });
      });
    }
  }

  aceptar(): void {
    this.ingredient.id = this.form.value['id'];
    this.ingredient.name = this.form.value['name'];
    this.ingredient.calories = this.form.value['calories'];
    if (this.form.valid) {
        if (this.edicion) {
            this.ingredientService.update(this.ingredient).subscribe((data) => {
            this.ingredientService.list().subscribe(data => {
              this.ingredientService.setList(data);//(enviando el listado al suscriptor)
            })
          });
        } else {
            console.log(this.ingredient);
            this.ingredientService.insert(this.ingredient).subscribe((data) => {
            this.ingredientService.list().subscribe(data => {
              this.ingredientService.setList(data);
            })
          });
        }
        this.router.navigate(['/recipe']);
      } else{
        this.mensaje = "Agrege campos omitidos";
      }
  }

}

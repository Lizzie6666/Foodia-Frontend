import { Injectable } from '@angular/core';
import { IngredientCategory } from '../model/ingredient-category';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { environment } from '../../environments/environment';

const base_url = environment.base
@Injectable({
  providedIn: 'root'
})
export class IngredientCategoryService {

  private url = `${base_url}` //OJOx
  private lista = new Subject<IngredientCategory[]>();
  constructor(private http:HttpClient) { }

  list() : Observable<any>{
    return this.http.get<IngredientCategory[]> (this.url+"/ingredientCategory/list");
  }

  insert(recipe:IngredientCategory){
    return this.http.post(this.url+ "/ingredientCategory/save", recipe);
  }
  update(rec: IngredientCategory){
    return this.http.put(this.url + "/ingredientCategory/update", rec);
  }
  delete(id:number){
    return this.http.delete(this.url + "/ingredientCategory/delete/" + id);
  }
  setList(listaNueva : IngredientCategory[]){
    this.lista.next(listaNueva);//enviar la nueva lista a los suscriptores
  }
  getList(){
    return this.lista.asObservable();
  }
}

import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Ingredient } from '../../../model/ingredient';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { IngredientService } from '../../../service/ingredient.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { IngredientDialogComponent } from './ingredient-dialog/ingredient-dialog.component';

@Component({
  selector: 'app-ingredient-list',
  templateUrl: './ingredient-list.component.html',
  styleUrl: './ingredient-list.component.css'
})
export class IngredientListComponent implements OnInit, AfterViewInit {
  lista: Ingredient[] = [];
  displayedColumns = ['id', 'name', 'calories', 'accion01', 'accion02'];
  dataSource = new MatTableDataSource<Ingredient>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private ingredientService: IngredientService, private router: Router, private dialog: MatDialog) {
    console.log("Load Constructor");
  }

  ngOnInit(): void {
    this.ingredientService.list().subscribe(data => {
      this.dataSource.data = data;
    });
    // me suscribo
    this.ingredientService.getList().subscribe(data => {
      this.dataSource.data = data;
    });
  }

  openDialog(id: number) {
    const dialogRef = this.dialog.open(IngredientDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.delete(id);
      } else {
        console.log("FALSE");
      }
    });
  }

  delete(id: number) {
    this.ingredientService.delete(id).subscribe(() => {
      this.ingredientService.list().subscribe(data => {
        this.ingredientService.setList(data);
      });
    });
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  filtrar(e: any) {
    this.dataSource.filter = e.target.value.trim().toLowerCase();
  }
}

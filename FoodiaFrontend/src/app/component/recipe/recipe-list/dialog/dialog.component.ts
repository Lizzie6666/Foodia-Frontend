import { Component, Inject } from '@angular/core';
import { Recipe } from '../../../../model/recipe';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.css'
})
export class DialogComponent {
  dialogOpen=true;
  constructor(@Inject(MAT_DIALOG_DATA) public data: Recipe) {}
}

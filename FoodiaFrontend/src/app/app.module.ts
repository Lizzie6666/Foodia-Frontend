import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IngredientListComponent } from './component/ingredient/ingredient-list/ingredient-list.component';
import { CreateEditComponent } from './component/ingredient/create-edit/create-edit.component';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule} from '@angular/material/table';//add
import { MatButtonModule } from '@angular/material/button';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule} from '@angular/material/input'
import { MatDatepickerModule} from '@angular/material/datepicker'
import { MatNativeDateModule } from '@angular/material/core';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatDialogModule} from '@angular/material/dialog';
import { MatMomentDateModule} from '@angular/material-moment-adapter';
import { MatSelectModule } from '@angular/material/select';
import { MatGridListModule} from '@angular/material/grid-list';
import { MatCardModule} from '@angular/material/card';
import { MatIconModule} from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { MatMenuModule} from '@angular/material/menu';
import { IngredientDialogComponent } from './component/ingredient/ingredient-list/ingredient-dialog/ingredient-dialog.component'
import { IngredientComponent } from './component/ingredient/ingredient.component';

 
@NgModule({
  declarations: [
    AppComponent,
    IngredientListComponent,
    CreateEditComponent,
    IngredientDialogComponent,
    IngredientComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatButtonModule,
    MatSortModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatToolbarModule,
    MatDialogModule,
    MatMomentDateModule,
    MatSelectModule,
    MatGridListModule,
    MatCardModule,
    MatIconModule,
    CommonModule,
    MatMenuModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NavbarComponent} from './navbar/navbar.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule, MatIconButton} from "@angular/material/button";
import {EditComponent} from './edit/edit.component';
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from "@angular/material/dialog";
import {MatIcon, MatIconModule} from "@angular/material/icon";
import {DialogModule} from "@angular/cdk/dialog";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatSortModule} from "@angular/material/sort";
import {MatSnackBar, MatSnackBarModule} from "@angular/material/snack-bar";
import {BoardComponent} from './board/board.component';
import {RouterModule, RouterOutlet} from "@angular/router";
import {CdkDrag, CdkDropList, CdkDropListGroup, DragDropModule} from "@angular/cdk/drag-drop";
import {AppRoutingModule} from "./app-routing.module";
import {ColorPickerModule} from "ngx-color-picker";
import {MatCardModule} from "@angular/material/card";


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    EditComponent,
    BoardComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    DialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatIconModule,
    MatSnackBarModule,
    RouterOutlet,
    CdkDropListGroup,
    CdkDropList,
    CdkDrag,
    AppRoutingModule,
    RouterModule,
    ColorPickerModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    DragDropModule
  ],
  providers: [{provide: MatDialogRef, useValue: {}},
    {provide: MAT_DIALOG_DATA, useValue: []},],
  bootstrap: [AppComponent]
})
export class AppModule {
}

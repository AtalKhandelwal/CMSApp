import {MatButtonModule, MatToolbarModule, MatInputModule, MatSortModule, MatPaginatorModule,MatDialogModule} from '@angular/material';
import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [

  ],
  imports: [
          MatButtonModule,
    MatSelectModule,
    MatDialogModule,
    MatToolbarModule,
    MatPaginatorModule,
    MatMenuModule,
    MatIconModule,
    CommonModule,
    MatInputModule,
    MatTableModule,
    MatFormFieldModule,
    MatSidenavModule,
    MatListModule,
    MatSortModule
  ],
  exports: [
          MatButtonModule,
    MatSortModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    CommonModule,
    MatPaginatorModule,
    MatInputModule,
    MatTableModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,
    MatSidenavModule,
    MatListModule
  ]
})
export class MaterialModule { }

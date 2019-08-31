import {MatButtonModule, MatToolbarModule} from '@angular/material';
import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [

  ],
  imports: [
          MatButtonModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatSidenavModule,
    CommonModule,
    MatCardModule
  ],
  exports: [
          MatButtonModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatSidenavModule,
    CommonModule,
    MatCardModule
  ]
})
export class MaterialModule { }

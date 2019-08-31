import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PagesListComponent} from "./pages-list/pages-list.component";
import {HomePageComponent} from "./home-page/home-page.component";
import {FrontRoutingModules} from "./front-routing.module";
import {FrontPageComponent} from "./front-page.component";
import {AppNavbarComponent} from "./app-navbar/app-navbar.component";
import {MaterialModule} from '../material.module';
import { PagesComponent } from './pages/pages.component';



@NgModule({
  declarations: [PagesListComponent, HomePageComponent, FrontPageComponent, AppNavbarComponent, PagesComponent],
  entryComponents:[],
  imports: [
    CommonModule,
    FrontRoutingModules,
    MaterialModule
  ]
})
export class FrontPageModule { }

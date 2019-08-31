import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomePageComponent} from "./home-page/home-page.component";
import {FrontPageComponent} from "./front-page.component";
import {PagesListComponent} from "./pages-list/pages-list.component";
import { PagesComponent } from "./pages/pages.component";

const routes: Routes = [
  {
    path: '' ,
    component: FrontPageComponent,
    children: [
      {
        path: '',
        component: HomePageComponent
      },
      {
        path: 'article',
        component: PagesListComponent,
      },
      {
        path: 'pages/:url',
        component: PagesComponent
      },
      {
        path: '**',
        redirectTo: 'home'
      }
    ]
  }
];

export const FrontRoutingModules = RouterModule.forChild(routes);

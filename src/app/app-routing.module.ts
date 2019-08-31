import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CommonModule} from "@angular/common";
import {LoginPageComponent} from './login-page/login-page.component';
import {AdminPageComponent} from "./admin-page/admin-page.component";
import {FrontPageComponent} from "./front-page/front-page.component";
import {AdminGuard} from "./guards/admin.guard";
import {SubscriberGuard} from "./guards/subscriber.guard";
import {AdminPageModule} from "./admin-page/admin-page.module";
import { AppComponent } from "./app.component";
import {FrontPageModule} from "./front-page/front-page.module";

const routes: Routes = [
  {path: 'home', loadChildren : () => import('./front-page/front-page.module').then(m => FrontPageModule)},
  {path: 'login', component: LoginPageComponent},
  {path: 'admin', loadChildren : () => import('./admin-page/admin-page.module').then(m => AdminPageModule) , canActivate: [ AdminGuard]},
  {path: '**', redirectTo: 'home'}

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule],
  providers: []
})

export class AppRoutingModules {}

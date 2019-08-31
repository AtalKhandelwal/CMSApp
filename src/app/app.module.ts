import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { NgModule } from '@angular/core';
import {AngularFireModule} from '@angular/fire';
import {AngularFireDatabaseModule ,AngularFireDatabase} from '@angular/fire/database';

import { AppComponent } from './app.component';
import {environment} from '../environments/environment';

import { LoginPageComponent } from './login-page/login-page.component';
import {AppRoutingModules} from './app-routing.module';
import {AfService} from "./providers/af.service";
import {AngularFireAuthModule} from "@angular/fire/auth";
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/firestore';
import {AdminGuard} from "./guards/admin.guard";
import {SubscriberGuard} from "./guards/subscriber.guard";
import {MatButtonModule, MatIconModule, MatMenuModule, MatSidenavModule} from '@angular/material';
import { MatToolbarModule } from '@angular/material';
import {MaterialModule} from "./material.module";
import {MenusService} from "./service/menus/menus.service";
import {PostsService} from "./service/posts/posts.service";
import {AppNavbarComponent} from "./admin-page/app-navbar/app-navbar.component";

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AppRoutingModules,
    AngularFireAuthModule,
    AngularFirestoreModule,
    MatButtonModule,
    MaterialModule,
    MatIconModule,
    MatMenuModule,
    BrowserAnimationsModule,

  ],
  providers: [AfService, AdminGuard, SubscriberGuard, MenusService, PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

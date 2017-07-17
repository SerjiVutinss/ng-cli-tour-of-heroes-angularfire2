import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { firebaseConfig } from '../environments/firebase';

import { AppComponent } from './app.component';

import {
  HomeComponent,
  LoginComponent,
  DashboardComponent,
  HeroesComponent,
  HeroDetailComponent,
  MaterialTestComponent,
  AlertDialogComponent
} from './components';

import { AuthService, HeroService } from './services';
import { AuthGuard } from './auth.guard';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule, MdDialogModule, MdMenuModule, MdButtonModule, MdTabsModule, MdSidenavModule } from '@angular/material';

import { FlexLayoutModule } from "@angular/flex-layout";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    DashboardComponent,
    HeroesComponent,
    HeroDetailComponent,
    MaterialTestComponent,
    AlertDialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule,
    MdDialogModule,
    MdMenuModule,
    MdButtonModule,
    MdTabsModule,
    MdSidenavModule
  ],
  entryComponents: [
    AlertDialogComponent
  ],
  providers: [AuthService, AuthGuard, HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }

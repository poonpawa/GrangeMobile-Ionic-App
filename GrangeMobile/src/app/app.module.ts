import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { environment } from "../environments/environment";

import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { ModulesComponent } from './modules/modules.component';
import { CampusesComponent } from './campuses/campuses.component';
import { DataService } from './services/data.service';
import { FlickrService } from './services/flickr.service';
import { GoogleMapsComponent } from './campuses/google-maps/google-maps.component';
import { LoginComponent } from './authentication/login/login.component';
import { RegisterComponent } from './authentication/register/register.component';
import { AuthService } from './services/auth.service';
import { UserResolver } from "./services/user.resolver";
import { AuthGuard } from "./services/auth.guard";
import { UserService } from './services/user.service';
import { FacultyComponent } from './faculty/faculty.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    ModulesComponent,
    CampusesComponent,
    GoogleMapsComponent,
    LoginComponent,
    RegisterComponent,
    FacultyComponent
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule // imports firebase/auth, only needed for auth features]
  ],
  providers: [
    StatusBar,
    SplashScreen,
    DataService,
    FlickrService,
    AuthService,
    UserService,
    AuthGuard,
    UserResolver,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {RouterModule,Routes} from "@angular/router";
import {FlashMessagesModule} from "angular2-flash-messages";


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";

import {AuthService} from "./service/auth.service";
import { ProfileComponent } from './components/profile/profile.component';

import {AuthGuard} from "./service/auth.guard";
import { HomeComponent } from './components/home/home.component';
import { AdminpannelComponent } from './components/adminpannel/adminpannel.component';
import { RequestLeaveComponent } from './components/profile/profile_includes/request-leave/request-leave.component';
import { ViewrequestsComponent } from './components/profile/profile_includes/viewrequests/viewrequests.component';


const applicationRoutes:Routes = [
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'profile',component:ProfileComponent,canActivate:[AuthGuard]},
  {path:'home',component:HomeComponent},
  {path:'adminpannel',component:AdminpannelComponent},
  {path:'request-leave',component:RequestLeaveComponent},
  {path:'viewrequests',component:ViewrequestsComponent},



]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    HomeComponent,
    AdminpannelComponent,
    RequestLeaveComponent,
    ViewrequestsComponent,



  ],
  imports: [
    RouterModule.forRoot(applicationRoutes),
    BrowserModule,
    FormsModule,
    HttpModule,
    FlashMessagesModule.forRoot(),



  ],
  providers: [AuthService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

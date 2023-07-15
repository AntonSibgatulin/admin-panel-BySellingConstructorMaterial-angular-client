import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainComponent } from './jp/antonsibgatulin/main/main.component';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import {AppRoutingModule} from "./app-routing.module";
import { AuthLayoutComponent } from './jp/antonsibgatulin/layouts/auth-layout/auth-layout.component';
import { LoginComponent } from './jp/antonsibgatulin/layout-components/login/login.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { HomeLayoutComponent } from './jp/antonsibgatulin/layouts/home-layout/home-layout.component';
import { DashboardComponent } from './jp/antonsibgatulin/home/dashboard/dashboard.component';
import { MessagesComponent } from './jp/antonsibgatulin/home/messages/messages.component';
import { ShopsComponent } from './jp/antonsibgatulin/home/shops/shops.component';
import { ItemsComponent } from './jp/antonsibgatulin/home/items/items.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AuthLayoutComponent,
    LoginComponent,
    HomeLayoutComponent,
    DashboardComponent,
    MessagesComponent,
    ShopsComponent,
    ItemsComponent
  ],
  imports: [
    BrowserModule,
    //StoreRouterConnectingModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

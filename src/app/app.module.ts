import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StatsComponent } from './stats/stats.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { MatToolbarModule } from "@angular/material/toolbar";
import { BottomBarComponent } from './bottom-bar/bottom-bar.component';
import { MainComponent } from './main/main.component';
import { FlexLayoutModule } from "@angular/flex-layout";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DefaultMaterialModule} from './material.module';
import { KitManagerComponent } from "./kitmanager/kitmanager.component";
import { LoginComponent } from "./login/login.component";
import { AddRationKitComponent } from "./add-ration-kit/add-ration-kit.component";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    StatsComponent,
    TopBarComponent,
    BottomBarComponent,
    MainComponent,
    KitManagerComponent,
    LoginComponent,
    AddRationKitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    DefaultMaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

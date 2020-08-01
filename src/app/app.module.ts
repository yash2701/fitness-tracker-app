import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './products/product/product.component';
import { ProductsService } from './services/products.service';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { TrainingComponent } from './training/training.component';
import { CurrentTrainingComponent } from './training/current-training/current-training.component';
import { NewTrainingComponent } from './training/new-training/new-training.component';
import { PastTrainingComponent } from './training/past-training/past-training.component';
import { WelcomeComponent } from './welcome/welcome.component';



@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductComponent,
    HomeComponent,
    SignupComponent,
    LoginComponent,
    TrainingComponent,
    CurrentTrainingComponent,
    NewTrainingComponent,
    PastTrainingComponent,
    WelcomeComponent
  ],
  imports: [
    FlexLayoutModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    ReactiveFormsModule,
  ],
  providers: [
    ProductsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

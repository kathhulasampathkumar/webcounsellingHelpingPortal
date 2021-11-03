import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { GuestComponent } from './guest/guest.component';
import { HomeComponent } from './home/home.component';
import { CollegelistComponent } from './collegelist/collegelist.component';
import { ListofcollegesComponent } from './listofcolleges/listofcolleges.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

import { NgModel } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    GuestComponent,
    HomeComponent,
    CollegelistComponent,
    ListofcollegesComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

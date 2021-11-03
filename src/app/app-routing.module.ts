import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollegelistComponent } from './collegelist/collegelist.component';

import { GuestComponent } from './guest/guest.component';
import { HomeComponent } from './home/home.component';
import { ListofcollegesComponent } from './listofcolleges/listofcolleges.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

import { NgModel } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';

const routes: Routes = [ 
  {path:'home', component:HomeComponent},
  {path:'signin', component:SigninComponent},
  {path:'signup', component:SignupComponent},
  {path:'guest', component:GuestComponent},
  {path:'collegelist', component:CollegelistComponent},
  {path:'listofcolleges',component:ListofcollegesComponent},
  {path:'pagenotfound',component:PagenotfoundComponent},

  {path:'', redirectTo:'home', pathMatch:"full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

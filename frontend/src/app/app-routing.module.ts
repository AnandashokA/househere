import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { RentComponent } from './components/rent/rent.component';
import { RentHouseDetailsComponent } from './components/rent-house-details/rent-house-details.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { ProfileComponent } from './components/profile/profile.component';
const routes: Routes = [
  {
    path:'',
    redirectTo:'/home',
    pathMatch:'full'
  },
  {
    path:'home',
    component:HomeComponent
  },
  // { path: '**', redirectTo: '/home', pathMatch: 'full' },
  {
    path:'forget-password',
    component:ForgetPasswordComponent
  },
  {
    path:'reset-password',
    component:ResetPasswordComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'rent',
    component:RentComponent
  },
  {
    path:'house-details',
    component:RentHouseDetailsComponent
  },
  {
    path:'profile',
    component:ProfileComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

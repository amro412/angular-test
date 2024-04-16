import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './account/login/login.component';
import { SignupComponent } from './account/signup/signup.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    {path: 'signup', component: SignupComponent},
    {path: 'login', component: LoginComponent},
    {path:'home', component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
import { Routes } from '@angular/router';
import { LoginComponent } from './account/login/login.component';
import { SignupComponent } from './account/signup/signup.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    
    {path: 'signup', component: SignupComponent},
    {path: 'login', component: LoginComponent},
    {path:'home', component:HomeComponent}
];




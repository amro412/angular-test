import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { LoginComponent } from './account/login/login.component';
import { SignupComponent } from './account/signup/signup.component';
import { ToggleComponent } from './account/toggle/toggle.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule, RouterLink, RouterLinkActive,RouterModule
    ,SignupComponent,LoginComponent, ToggleComponent, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'account-app';

  constructor(private router: Router) { }

  redirectTosignup() {
    this.router.navigate(['/signup']);
  }

  redirectTologin() {
    this.router.navigate(['/login']);
  }
  
  showSignup: boolean = true;

  onToggleChange(isLogin: boolean) {
    this.showSignup = !isLogin;
  }

}

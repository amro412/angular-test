import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule, RouterOutlet, RouterLink, RouterLinkActive,HttpClientModule,RouterModule,CommonModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  title = 'signup-app';

  firstname: string= '';
  lastname: string='';
  email: string= '';
  password: string= '';

  constructor(private http: HttpClient) { }

  onSignUp() {
    const signUpData = {
      firstname: this.firstname,
      lastname: this.lastname,
      email: this.email,
      password: this.password
    };
    this.http.post('http://localhost:8080/api/register', signUpData).subscribe(response => {
        console.log(response);
      });
  }
}

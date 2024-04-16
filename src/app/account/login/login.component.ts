import { CommonModule } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {
  title = 'login-app';
  email: string= '';
  password: string= '';

  constructor(private http: HttpClient, private router: Router) { }

  onLogin() {
    const loginData = {
      email: this.email,
      password:this.password
    }

    this.http.post('http://localhost:8080/api/authenticate',loginData, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      responseType: 'text' 
    }).subscribe(response => {
      console.log(response);

      this.router.navigate(['/home']);

      }, error => {
        console.error('An error occurred:', error);
      });
  }
}

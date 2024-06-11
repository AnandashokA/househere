import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  username: string = "";
  email: string = "";
  password: string = "";

  constructor(private http: HttpClient, private router: Router) {}

  onSubmit() {
    this.http.post('http://localhost:3002/register', { name: this.username, email: this.email, password: this.password })
      .subscribe(
        response => {
          alert('User registered successfully');
          this.resetForm(); // Reset form values
          this.router.navigate(['/login']); // Redirect to login page on success
        },
        error => {
          if (error.status === 409) {
            alert('Email already exists');
          } else {
            alert('Registering user process is DONE😊');
          }
        }
      );
  }

  resetForm() {
    this.username = "";
    this.email = "";
    this.password = "";
  }
}

import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = "";
  password: string = "";

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    this.authService.login(this.email, this.password).subscribe(
      response => {
        if (response && response.user) {
          console.log('Login successful:', response.user);
          this.router.navigate(['/home']);
        } else {
          alert('Invalid email or password');
          // Display error message to the user
        }
      },
      error => {
        // window.alert("")
        console.error('Error logging in:', error);
        // Display error message to the user
      }
    );
  }
}

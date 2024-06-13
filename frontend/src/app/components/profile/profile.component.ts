import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile: any = {
    name: '',
    email: '',
    address: '',
    phone: ''
    // Add more fields as needed
  };

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.currentLoginStatus.subscribe(status => {
      if (status) {
        const email = ''; // Replace with the actual user email
        this.authService.getProfile(email).subscribe(
          response => {
            if (response) {
              this.profile = response;
            }
          },
          error => {
            console.error('Error fetching profile:', error);
          }
        );
      }
    });
  }

  onSave(): void {
    this.authService.updateProfile(this.profile).subscribe(
      response => {
        console.log('Profile updated successfully:', response);
      },
      error => {
        console.error('Error updating profile:', error);
      }
    );
  }
}

import { Component,OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit{
  isloggedin = false;
  constructor(private authservice : AuthService){}
  ngOnInit(): void {
    this.authservice.currentLoginStatus.subscribe(status => {
      this.isloggedin = status;
    });
  }
}

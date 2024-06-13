import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false);
  currentLoginStatus = this.loggedIn.asObservable();

  private apiUrl = 'http://localhost:3002';

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, { email, password });
  }

  register(name: string, email: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/register`, { name, email, password });
  }

  changeLoginStatus(status: boolean) {
    this.loggedIn.next(status);
  }

  // Profile methods
  getProfile(email: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/profile?email=${email}`);
  }

  updateProfile(profile: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/profile`, profile);
  }
}

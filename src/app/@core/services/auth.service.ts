import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isLoggedInKey = 'isLoggedIn';

  constructor(private router: Router) {}

  login(phoneNumber: string): boolean {
    // ✅ در حالت واقعی اینجا باید call API بزنی و token بگیری
    if (phoneNumber === '09212441074') {
      localStorage.setItem(this.isLoggedInKey, 'true');
      return true;
    }
    return false;
  }

  logout(): void {
    localStorage.removeItem(this.isLoggedInKey);
    this.router.navigate(['/login']);
  }

  isAuthenticated(): boolean {
    return localStorage.getItem(this.isLoggedInKey) === 'true';
  }
}

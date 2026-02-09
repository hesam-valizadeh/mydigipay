  import { inject, Injectable } from '@angular/core';
  import { Router } from '@angular/router';

  @Injectable({
    providedIn: 'root',
  })
  export class AuthService {
    private isLoggedInKey = 'isLoggedIn';

    private router = inject(Router);

    login(phoneNumber: string): boolean {
      if (phoneNumber === '09212441074') {
        localStorage.setItem(this.isLoggedInKey, 'true');
        return true;
      }
      return false;
    }

    logout(): void {
      localStorage.removeItem(this.isLoggedInKey);
      void this.router.navigate(['/login']);
        }

    isAuthenticated(): boolean {
      return localStorage.getItem(this.isLoggedInKey) === 'true';
    }
  }

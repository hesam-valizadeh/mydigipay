import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly isLoggedInKey = 'isLoggedIn';

  private readonly router = inject(Router);

  public login(phoneNumber: string): boolean {
    if (phoneNumber === '09212441074') {
      localStorage.setItem(this.isLoggedInKey, 'true');
      return true;
    }
    return false;
  }

  public logout(): void {
    localStorage.removeItem(this.isLoggedInKey);
    void this.router.navigate(['/login']);
  }

  public isAuthenticated(): boolean {
    return localStorage.getItem(this.isLoggedInKey) === 'true';
  }
}

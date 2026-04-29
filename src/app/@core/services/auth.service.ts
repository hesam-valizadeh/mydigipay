import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
	providedIn: 'root',
})
export class AuthService {
	private readonly isLoggedInKey = 'isLoggedIn';
	private readonly phoneNumberKey = 'phoneNumber';

	private readonly router = inject(Router);

	public login(phoneNumber: string): boolean {
		if (phoneNumber === '09121234567') {
			localStorage.setItem(this.isLoggedInKey, 'true');
			localStorage.setItem(this.phoneNumberKey, phoneNumber);
			return true;
		}
		return false;
	}

	public logout(): void {
		localStorage.removeItem(this.isLoggedInKey);
		localStorage.removeItem(this.phoneNumberKey);
		void this.router.navigate(['/login']);
	}

	public isAuthenticated(): boolean {
		return localStorage.getItem(this.isLoggedInKey) === 'true';
	}

	public getPhoneNumber(): string | null {
		return localStorage.getItem(this.phoneNumberKey);
	}

	public getUserInfo(): { isLoggedIn: boolean; phoneNumber: string | null } {
		return {
			isLoggedIn: this.isAuthenticated(),
			phoneNumber: this.getPhoneNumber(),
		};
	}
}

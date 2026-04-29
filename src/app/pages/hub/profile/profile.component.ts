import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@core/services/auth.service';

@Component({
	selector: 'app-profile',
	imports: [],
	templateUrl: './profile.component.html',
	styleUrl: './profile.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileComponent {
	public fullName: string = '--- ---';
	private authService = inject(AuthService);
	private router = inject(Router);
	public get phoneNumber(): string | null {
		return this.authService.getPhoneNumber();
	}

	public logout(): void {
		this.authService.logout();
		void this.router.navigate(['/']);
	}
}

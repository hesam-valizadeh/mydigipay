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
  // 1. اول properties خصوصی (private)
  private authService = inject(AuthService);
  private router = inject(Router);

  // 2. بعد getterها (به عنوان property عمومی عمل می‌کنند)
  public get phoneNumber(): string | null {
    return this.authService.getPhoneNumber();
  }

  // 3. در آخر متدها
  public logout(): void {
    this.authService.logout();
    void this.router.navigate(['/login']);
  }
}

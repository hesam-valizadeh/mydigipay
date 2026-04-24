import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (): boolean => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.isAuthenticated()) {
    return true;
  }

  // اگر احراز هویت نشده، به لاگین برود
  void router.navigate(['/login']);
  return false;
};

// گارد جدید برای جلوگیری از دسترسی به لاگین زمانی که کاربر لاگین است
export const redirectIfAuthenticatedGuard: CanActivateFn = (): boolean => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.isAuthenticated()) {
    // اگر کاربر لاگین است، به هاب هدایت شود
    void router.navigate(['/hub']);
    return false;
  }

  return true;
};

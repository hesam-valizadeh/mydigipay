import { Component, inject, signal, OnDestroy } from '@angular/core';
import { CarouselStoryComponent } from '../../@shared/components/carousel-story/carousel-story.component';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { RouterLinksPath } from '../../@core/constants/router-links';
import { AuthService } from '../../@core/services/auth.service';
import { CustomInputComponent } from '../../@shared/components/form-controls/custom-input';
import { SkeletonDirective } from '../../@shared/directives/skeleton.directive';
import { Modal } from 'bootstrap';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CarouselStoryComponent,
    ReactiveFormsModule,
    CommonModule,
    CustomInputComponent,
    SkeletonDirective,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnDestroy {
  loading = signal(true);
  private readonly authService = inject(AuthService);
  private readonly fb = inject(FormBuilder);
  private readonly router = inject(Router);
  protected readonly RouterLinksPath = RouterLinksPath;

  phoneNumber: string | null = null;
  error = '';

  private referralModal?: Modal;

  constructor() {
    setTimeout(() => this.loading.set(false), 3000);
  }

  loginForm = this.fb.group({
    phone: ['', {
      // eslint-disable-next-line @typescript-eslint/unbound-method
      validators: [Validators.required, Validators.pattern(/^09\d{9}$/)],
      updateOn: 'change' 
    }],
  });
  referralForm = this.fb.group({
    // eslint-disable-next-line @typescript-eslint/unbound-method
    referral: ['', [Validators.required]],
  });
  
  login = (): void => {
    this.loading.set(true);
    setTimeout(() => {
      this.loading.set(false);
      alert('ورود موفق!');
    }, 2000);
  };
  onSubmitReferral = (): void => {
    if (this.referralForm.invalid) return;
  };

  onSubmit = (): void => {
    if (this.loginForm.invalid) return;

    const phone = this.loginForm.value.phone!;
    const success = this.authService.login(phone);

    if (success) {
      void this.router.navigate([this.RouterLinksPath.hubPage.hub], { replaceUrl: true });
    } else {
      this.error = 'نام کاربری یا رمز عبور اشتباه است.';
    }
  };

  openReferralModal = (): void => {
    const modalEl = document.getElementById('referralModal');
    if (!modalEl) return;

    this.referralModal = new Modal(modalEl, {
      backdrop: 'static',
      keyboard: false,
    });

    this.referralModal.show();
  };

  ngOnDestroy(): void {
    this.referralModal?.hide();
    this.referralModal?.dispose();
    document.body.classList.remove('modal-open');
    document.body.style.overflow = '';
    document.body.style.paddingRight = '';
    document.querySelectorAll('.modal-backdrop').forEach((b) => b.remove());
  }
}
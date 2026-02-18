import { Component, inject, signal, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { CarouselStoryComponent } from '../../@shared/components/carousel-story/carousel-story.component';
import { FormBuilder, Validators, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { routerLinksPath } from '../../@core/constants/router-links';
import { AuthService } from '../../@core/services/auth.service';
import { CustomInputComponent } from '../../@shared/components/form-controls/custom-input';
import { SkeletonDirective } from '../../@shared/directives/skeleton.directive';
import { Modal } from 'bootstrap';
const LOADING_TIMEOUT = 3000;
@Component({
  selector: 'app-login',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
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
  public phoneNumber: string | null = null;
  public error: string = '';
  public loading = signal<boolean>(true);

  public readonly loginForm: FormGroup = inject(FormBuilder).group({
    phone: [
      '',
      {
        // eslint-disable-next-line @typescript-eslint/unbound-method
        validators: [Validators.required, Validators.pattern(/^09\d{9}$/)],
        updateOn: 'change',
      },
    ],
  });

  public readonly referralForm: FormGroup = inject(FormBuilder).group({
    // eslint-disable-next-line @typescript-eslint/unbound-method
    referral: ['', [Validators.required]],
  });

  protected readonly routerLinksPath = routerLinksPath;

  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);
  private referralModal?: Modal;

  public constructor() {
    setTimeout((): void => this.loading.set(false), LOADING_TIMEOUT);
  }

  public onSubmitReferral = (): void => {
    if (this.referralForm.invalid) {
      return;
    }
  };

  public onSubmit = (): void => {
    if (this.loginForm.invalid) {
      return;
    }

    const phone: string = this.loginForm.get('phone')?.value as string;
    const success: boolean = this.authService.login(phone);

    if (success) {
      void this.router.navigate([this.routerLinksPath.hubPage.hub], { replaceUrl: true });
    } else {
      this.error = 'نام کاربری یا رمز عبور اشتباه است.';
    }
  };

  public openReferralModal = (): void => {
    const modalEl: HTMLElement | null = document.getElementById('referralModal');
    if (!modalEl) {
      return;
    }

    this.referralModal = new Modal(modalEl, {
      backdrop: 'static',
      keyboard: false,
    });

    this.referralModal.show();
  };

  public ngOnDestroy(): void {
    this.referralModal?.hide();
    this.referralModal?.dispose();
    document.body.classList.remove('modal-open');
    document.body.style.overflow = '';
    document.body.style.paddingRight = '';
    document.querySelectorAll('.modal-backdrop').forEach((b: Element): void => b.remove());
  }

  public get isLoading(): boolean {
    return this.loading();
  }
}

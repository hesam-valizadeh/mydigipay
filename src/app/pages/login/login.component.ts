import { Component, inject, signal } from '@angular/core';
import { CarouselStoryComponent } from '../../@shared/components/carousel-story/carousel-story.component';
import { FormBuilder, Validators, ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { RouterLinksPath } from '../../@core/constants/router-links';
import { AuthAppletRulesComponent } from './auth-applet-rules/auth-applet-rules.component';
import { AuthService } from '../../@core/services/auth.service';
import { CustomInputComponent } from '../../@shared/components/form-controls/custom-input';
import { SkeletonDirective } from '../../@shared/directives/skeleton.directive';
import { Modal } from 'bootstrap';

@Component({
  selector: 'app-login',
    imports: [
      RouterOutlet,
      CarouselStoryComponent,
      ReactiveFormsModule,
      CommonModule,
      RouterLink,CustomInputComponent,
      SkeletonDirective,
      AuthAppletRulesComponent,
    ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  loading = signal(true);
  private authService = inject(AuthService);
  private fb = inject(FormBuilder);
  private router = inject(Router);
  protected readonly RouterLinksPath = RouterLinksPath;
  phoneNumber:any;
  error = '';

  constructor() {
    setTimeout(() => this.loading.set(false), 3000);
  }

  login() {
    this.loading.set(true);
    setTimeout(() => {
      this.loading.set(false);
      alert('ورود موفق!');
    }, 2000);
  }
  

  


  loginForm = this.fb.group({
    phone: ['', [Validators.required, Validators.pattern(/^09\d{9}$/)]],
  });

  referralForm = this.fb.group({
    referral: ['', [Validators.required]],
  });

  onSubmitReferral() {
    if (this.referralForm.invalid) return;
  }



  onSubmit() {
    if (this.loginForm.invalid) return;

    const phone = this.loginForm.value.phone!;
    const success = this.authService.login(phone);

    if (success) {
      this.router.navigate(['/hub'], { replaceUrl: true });
        } else {
      this.error = 'نام کاربری یا رمز عبور اشتباه است.';
    }
  }
  private referralModal?: Modal;

  openReferralModal() {
    const modalEl = document.getElementById('referralModal');
    if (!modalEl) return;

    this.referralModal = new Modal(modalEl, {
      backdrop: 'static',
      keyboard: false
    });

    this.referralModal.show();
  }

  ngOnDestroy() {
    this.referralModal?.hide();
    document.body.classList.remove('modal-open');
    document.body.style.overflow = '';
    document.body.style.paddingRight = '';

    document.body.style.removeProperty;
    document.querySelectorAll('.modal-backdrop').forEach(b => b.remove());
  }
  }

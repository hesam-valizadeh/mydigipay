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
  loading = signal(true);     // ← این همونه که باید باشه
  authService: any;           // ← اگر واقعی داری inject کن، فعلاً برای رفع ارور

  constructor() {
    // شبیه‌سازی لودینگ (۳ ثانیه)
    setTimeout(() => this.loading.set(false), 3000);
  }

  login() {
    this.loading.set(true);
    // اینجا سرویس واقعی inject کن
    // const success = this.authService.login(this.phoneNumber);
    console.log('لاگین با شماره:', this.phoneNumber);

    setTimeout(() => {
      this.loading.set(false);
      alert('ورود موفق!');
    }, 2000);
  }
  
  
  private router = inject(Router);
  protected readonly RouterLinksPath = RouterLinksPath;
  
  phoneNumber:any;
  error = '';

  private fb = inject(FormBuilder);
  loginForm = this.fb.group({
    phone: ['', [Validators.required, Validators.pattern(/^09\d{9}$/)]],
  });

  
  // loginForm = new FormGroup({
  //   phone: new FormControl('', Validators.required)
  // });
  
  referralForm = this.fb.group({
    referral: ['', [Validators.required]],
  });

  onSubmitReferral() {
    if (this.referralForm.invalid) return;
  }



  onSubmit() {
    this.phoneNumber = this.loginForm.value.phone
    const success = this.authService.login(this.phoneNumber);

    if (success) {
      // ✅ بعد از لاگین موفق، بره به hub
      this.router.navigate(['/hub']);
    } else {
      this.error = 'نام کاربری یا رمز عبور اشتباه است.';
      console.log(this.error);
      
    }
  }
}

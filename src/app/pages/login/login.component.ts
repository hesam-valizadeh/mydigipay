import { Component, inject } from '@angular/core';
import { CarouselStoryComponent } from '../../@shared/components/carousel-story/carousel-story.component';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { RouterLinksPath } from '../../@core/constants/router-links';
import { AuthAppletRulesComponent } from './auth-applet-rules/auth-applet-rules.component';
import { AuthService } from '../../@core/services/auth.service';

@Component({
  selector: 'app-login',
    imports: [
      RouterOutlet,
      CarouselStoryComponent,
      ReactiveFormsModule,
      CommonModule,
      RouterLink,
      AuthAppletRulesComponent,
    ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  
  
  private authService = inject(AuthService);
  
  
  
  private router = inject(Router);
  protected readonly RouterLinksPath = RouterLinksPath;
  
  phoneNumber:any;
  error = '';

  private fb = inject(FormBuilder);
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

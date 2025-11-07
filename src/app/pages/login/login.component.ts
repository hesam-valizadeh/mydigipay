import { Component, inject } from '@angular/core';
import { CarouselStoryComponent } from '../../@shared/components/carousel-story/carousel-story.component';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { RouterLinksPath } from '../../@core/constants/router-links';
import { AuthAppletRulesComponent } from './auth-applet-rules/auth-applet-rules.component';

@Component({
  selector: 'app-login',
  imports: [RouterOutlet,CarouselStoryComponent,ReactiveFormsModule, CommonModule,RouterLink,AuthAppletRulesComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  private fb = inject(FormBuilder);
  protected readonly RouterLinksPath = RouterLinksPath;

  loginForm = this.fb.group({
    phone: ['', [Validators.required, Validators.pattern(/^09\d{9}$/)]],
  });
  onSubmit() {
    if (this.loginForm.invalid) return;
  }
}

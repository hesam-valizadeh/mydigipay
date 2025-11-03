import { Component, inject } from '@angular/core';
import { CarouselStoryComponent } from '../../@shared/components/carousel-story/carousel-story.component';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [CarouselStoryComponent,ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  private fb = inject(FormBuilder);
  loginForm = this.fb.group({
    phone: ['', [Validators.required, Validators.pattern(/^09\d{9}$/)]],
  });
  onSubmit() {
    console.log(this.loginForm);
    
    if (this.loginForm.invalid) return;
    console.log(this.loginForm.value);
  }
}

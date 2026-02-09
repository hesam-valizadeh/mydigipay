import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { OnChangeFn, OnTouchedFn } from '@core/models/types/custom-input.types';


@Component({
  selector: 'app-custom-input',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomInputComponent),
      multi: true,
    },
  ],
  templateUrl: "./custom-input.component.html",
  styleUrl: "./custom-input.component.scss",
})
export class CustomInputComponent implements ControlValueAccessor {
  @Input() label = 'Phone Number';
  @Input() placeholder = '09123456789';

  value = '';
  error: string | null = null;
  touched = false;

  onChange: OnChangeFn = () => {};
  onTouched: OnTouchedFn = () => {};

  // ---- VALIDATION ----
  validate(value: string): void {
    const v = (value ?? '').trim();

    if (!v) {
      this.error = 'شماره تماس الزامی است';
      return;
    }

    if (!/^\d+$/.test(v)) {
      this.error = 'فقط ارقام مجاز هستند';
      return;
    }

    if (v.length < 11) {
      this.error = 'شماره باید دقیقاً 11 رقم باشد (کمتر است)';
      return;
    }

    if (v.length > 11) {
      this.error = 'شماره باید دقیقاً 11 رقم باشد (بیشتر است)';
      return;
    }

    this.error = null;
  }

  // ---- INPUT ----
  onInput(event: Event): void {
    const inputValue = (event.target as HTMLInputElement).value;
    this.value = inputValue;
    this.validate(this.value);
    this.onChange(this.value);
  }

  // ---- BLUR ----
  handleBlur(): void {
    this.touched = true;
    this.onTouched();
  }

  // ---- CVA REQUIRED METHODS ----
  writeValue(value: string | null): void {
    this.value = value || '';
    this.validate(this.value);
  }

  registerOnChange(fn: OnChangeFn): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: OnTouchedFn): void {
    this.onTouched = fn;
  }

  setDisabledState?(_isDisabled: boolean): void {}
}
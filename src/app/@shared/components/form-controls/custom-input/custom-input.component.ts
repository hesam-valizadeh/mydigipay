import { Component, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
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
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomInputComponent implements ControlValueAccessor {
  // eslint-disable-next-line no-magic-numbers
  private static readonly PHONE_LENGTH = 11;
  @Input() public label = 'Phone Number';
  @Input() public placeholder = '09123456789';

  public value = '';
  public error: string | null = null;
  public touched = false;

  public onChange: OnChangeFn = () => {};
  public onTouched: OnTouchedFn = () => {};

  // ---- VALIDATION ----
  public validate(value: string | null | undefined): void {
    const v = (value ?? '').trim();

    if (v.length === 0) {
      this.error = 'شماره تماس الزامی است';
      return;
    }

    if (!/^\d+$/.test(v)) {
      this.error = 'فقط ارقام مجاز هستند';
      return;
    }

    if (v.length < CustomInputComponent.PHONE_LENGTH) {
      this.error = 'شماره باید دقیقاً 11 رقم باشد (کمتر است)';
      return;
    }

    if (v.length > CustomInputComponent.PHONE_LENGTH) {
      this.error = 'شماره باید دقیقاً 11 رقم باشد (بیشتر است)';
      return;
    }

    this.error = null;
  }

  // ---- INPUT ----
  public onInput(event: Event): void {
    const inputValue = (event.target as HTMLInputElement).value;
    this.value = inputValue;
    this.validate(this.value);
    this.onChange(this.value);
  }

  // ---- BLUR ----
  public handleBlur(): void {
    this.touched = true;
    this.onTouched();
  }

  // ---- CVA REQUIRED METHODS ----
  public writeValue(value: string | null): void {
    this.value = value ?? '';
    this.validate(this.value);
  }

  public registerOnChange(fn: OnChangeFn): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: OnTouchedFn): void {
    this.onTouched = fn;
  }

  public setDisabledState?(): void {}
}

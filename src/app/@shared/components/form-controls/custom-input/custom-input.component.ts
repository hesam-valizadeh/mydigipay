import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor, ReactiveFormsModule, FormsModule } from '@angular/forms';

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
  templateUrl:"./custom-input.component.html" ,
  styleUrl:"./custom-input.component.scss" ,
})
export class CustomInputComponent implements ControlValueAccessor {
  @Input() label: string = 'Phone Number';
  @Input() placeholder: string = '09123456789';

  value: string = '';
  error: string | null = null;
  touched: boolean = false;

  onChange: any = () => {};
  onTouched: any = () => {};

  // ---- VALIDATION ----
  validate(value: string) {
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
  onInput(event: Event) {
    const inputValue = (event.target as HTMLInputElement).value;
    this.value = inputValue;
    this.validate(this.value);
    this.onChange(this.value);
  }

  // ---- BLUR ----
  handleBlur() {
    this.touched = true;
    this.onTouched();
  }

  // ---- CVA REQUIRED METHODS ----
  writeValue(value: any): void {
    this.value = value || '';
    this.validate(this.value);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {}
}

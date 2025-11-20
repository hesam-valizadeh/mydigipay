import { Component } from '@angular/core';
import { CustomInputComponent } from '../../@shared/components/form-controls/custom-input';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-wealth',
  imports: [ReactiveFormsModule,CustomInputComponent],
  templateUrl: './wealth.component.html',
  styleUrl: './wealth.component.scss',
})
export class WealthComponent {

  form = new FormGroup({
    phone: new FormControl('', Validators.required)
  });
  submit() {
    console.log(this.form.value);
  }
}

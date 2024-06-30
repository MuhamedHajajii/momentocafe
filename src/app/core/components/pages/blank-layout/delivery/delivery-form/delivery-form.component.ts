import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-delivery-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './delivery-form.component.html',
  styleUrl: './delivery-form.component.scss',
})
export class DeliveryFormComponent {
  deliveryForm: FormGroup = new FormGroup({
    CustomerName: new FormControl('', [Validators.required]),
    PhoneNumber: new FormControl('', [Validators.required]),
    Address: new FormControl('', [Validators.required]),
    orderItems: new FormControl('', [Validators.required]),
    paymentInformation: new FormControl('', [Validators.required]),
    anyRemarks: new FormControl(''),
  });

  onSubmit(): void {
    console.log(this.deliveryForm.value);
  }
}

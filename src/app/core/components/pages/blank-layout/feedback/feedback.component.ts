import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { Router } from '@angular/router';
import { RatingModule } from 'primeng/rating';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [ReactiveFormsModule, RatingModule, FormsModule],
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.scss',
})
export class FeedbackComponent {
  constructor(private _Router: Router, private _HttpClient: HttpClient) {}
  d = new Date();
  Taste: number = 0;
  Quality: number = 0;
  Place: number = 0;
  Service: number = 0;

  rateForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    mobile: new FormControl(''),
    taste: new FormControl(''),
    quality: new FormControl(''),
    place: new FormControl(''),
    service: new FormControl(''),
    comments: new FormControl(''),
    date: new FormControl(this.d.toLocaleDateString()),
    time: new FormControl(this.d.toLocaleTimeString()),
  });

  onSubmitRateForm(): void {
    this._HttpClient
      .post(
        'https://script.google.com/macros/s/AKfycbxCmfNqAsbRh_hQma2K7cV6BRMiasyaj_Kv-Ij8V9vWnEd4ucfEyzIRhc11jiq5uh4/exec',
        JSON.stringify(this.rateForm.value)
      )
      .subscribe({
        next: (response) => {
          this.alertWithSuccess();
        },
        error: (error) => {
          console.log(error);
        },
      });
  }

  alertWithSuccess() {
    Swal.fire(
      "Moments' Says Thank you...",
      'Your Comments submitted succesfully!',
      'success'
    ).then(() => {
      this._Router.navigate(['/']);
    });
  }
}

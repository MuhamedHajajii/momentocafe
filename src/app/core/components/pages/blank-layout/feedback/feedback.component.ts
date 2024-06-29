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
    id: new FormControl('INCREMENT'),
    name: new FormControl(''),
    mobile: new FormControl(''),
    Taste: new FormControl(''),
    Quality: new FormControl(''),
    Place: new FormControl(''),
    Service: new FormControl(''),
    Comments: new FormControl(''),
    Date: new FormControl(this.d.toLocaleDateString()),
    Time: new FormControl(this.d.toLocaleTimeString()),
  });

  ngOnInit(): void {
    console.log(this.d.toLocaleDateString());
    console.log(this.d.toLocaleTimeString());
  }

  onSubmitRateForm(): void {
    fetch('https://sheetdb.io/api/v1/gmk094xnrva8o', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        data: [this.rateForm.value],
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
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

import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Finalorder, Order } from '../../../../../interfaces/finalorder';
import { OnlineordersService } from '../../../../../services/onlineorders.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { CartService } from '../../../../../services/cart.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent {
  startValidation: boolean = false;
  finalOrder!: Finalorder;
  order!: Order;
  lightBoxFlag: boolean = false;

  constructor(
    @Inject(PLATFORM_ID) private platformId: object,
    private _OnlineordersService: OnlineordersService,
    private _Router: Router,
    private _CartService: CartService
  ) {}

  ngOnInit(): void {
    this.getCurrentOrderDetails();
  }
  orderForm: FormGroup = new FormGroup({
    Clint_Name: new FormControl('', [Validators.required]),
    Clint_Email: new FormControl('', [Validators.required, Validators.email]),
    Clint_Phone: new FormControl('', [
      Validators.required,
      Validators.pattern('^01[0125][0-9]{8}$'),
    ]),
    Clint_Address: new FormControl('', [Validators.required]),
    Clint_Remarks: new FormControl(''),
  });

  getCurrentOrderDetails(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.order = JSON.parse(sessionStorage.getItem('order') as string);
    }
  }

  /**
   * Handle Order before Send to the Server
   */
  onSubmit(): void {
    this.startValidation = true;
    if (this.orderForm.valid) {
      this.finalOrder = {
        order: this.order,
        details: this.orderForm.value,
      };
      this.toggleLightBox();
    }
  }
  /**
   * Handle Order Request for The Server
   */
  sendOrder(): void {
    this._OnlineordersService.sendOrder(this.finalOrder).subscribe({
      next: (response) => {
        console.log(response.message);
        this.toggleLightBox();
        if (isPlatformBrowser(this.platformId)) {
          sessionStorage.removeItem('order');
        }
        this._CartService.currentOrder.next([]);
        this.alertWithSuccess(response.message);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  /**
   * Handle Success Message
   */
  alertWithSuccess(message: string) {
    Swal.fire(
      "Moments' Will be in touch with you ASAP",
      `${message}
      
      `,
      'success'
    ).then(() => {
      this._Router.navigate(['/']);
    });
  }
  /**
   * Handle Light Box
   */
  toggleLightBox(): void {
    this.lightBoxFlag = !this.lightBoxFlag;
  }
  stopProp(E: Event): void {
    E.stopPropagation();
  }
}

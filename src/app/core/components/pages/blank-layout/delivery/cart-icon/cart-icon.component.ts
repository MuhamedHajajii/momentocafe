import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { BadgeModule } from 'primeng/badge';
import { menuItem } from '../../../../../interfaces/allmenudata';
import { CartService } from '../../../../../services/cart.service';
import { Router } from '@angular/router';
import { order } from '../../../../../interfaces/order';

@Component({
  selector: 'app-cart-icon',
  standalone: true,
  imports: [BadgeModule, CommonModule],
  templateUrl: './cart-icon.component.html',
  styleUrl: './cart-icon.component.scss',
})
export class CartIconComponent implements OnInit {
  Order: order[] = [];
  currentOrder: menuItem[] = [];
  CartTotalPrice: number = 0;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private _CartService: CartService,
    private _Router: Router
  ) {}
  ngOnInit(): void {
    this.getCartData();
  }

  getCartData(): void {
    this._CartService.currentOrder.subscribe({
      next: (BD_Response) => {
        this.Order = [];
        this.currentOrder = [];
        this.currentOrder = [...BD_Response];
        this.prepOrder(BD_Response);
        this.getCartTotalPrice();
        this.saveSessionStorage(BD_Response);
      },
    });
  }

  prepOrder(BD_Response: menuItem[]): void {
    BD_Response.forEach((ele) => {
      this.Order.push({
        name: ele.Name,
        count: 1,
        Price: Number(ele.Double_Price),
      });
    });
  }

  saveSessionStorage(BD_Response: menuItem[]): void {
    if (isPlatformBrowser(this.platformId)) {
      if (sessionStorage.getItem('userOrder') !== null) {
        this.currentOrder = JSON.parse(
          sessionStorage.getItem('userOrder') as string
        ) as menuItem[];
      }
    }
  }
  updateSessionStorage(): void {
    if (isPlatformBrowser(this.platformId)) {
      sessionStorage.setItem('userOrder', JSON.stringify(this.currentOrder));
    }
  }
  getCartTotalPrice(): void {
    this.CartTotalPrice = 0;
    this.Order.forEach((ele) => {
      this.CartTotalPrice += ele.Price * ele.count;
    });
  }

  stopProp(e: Event) {
    e.stopPropagation();
  }

  deleteItem(i: number): void {
    this.Order.splice(i, 1);
    this.currentOrder.splice(i, 1);
    this._CartService.updateCart(i);
    this.updateSessionStorage();
    this.getCartTotalPrice();
  }
  incrementCartItem(index: number, count: number): void {
    if (count > 0) {
      this.Order[index].count = count;
      this.getCartTotalPrice();
    }
  }
  decrementCartItem(index: number, count: number): void {
    if (count > 0) {
      this.Order[index].count = count;
      this.getCartTotalPrice();
    }
  }
  getOrderInfo(dropdown_menu: HTMLUListElement): void {
    dropdown_menu.classList.remove('show');
    const Order = {
      order_Details: this.Order,
      Total: this.CartTotalPrice,
    };
    if (isPlatformBrowser(this.platformId)) {
      sessionStorage.setItem('order', JSON.stringify(Order));
    }
    this._Router.navigate(['/cart']);
  }
}

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { menuItem } from '../interfaces/allmenudata';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  public currentOrder: BehaviorSubject<menuItem[]> = new BehaviorSubject<
    menuItem[]
  >([]);

  updateCart(index: number): void {
    const updatedOrder = this.currentOrder.value.filter((_, i) => i !== index);
    this.currentOrder.next(updatedOrder);
  }
}

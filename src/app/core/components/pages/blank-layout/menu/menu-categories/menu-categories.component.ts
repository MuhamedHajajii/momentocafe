import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { Allmenudata, menuItem } from '../../../../../interfaces/allmenudata';
import { CategoriesPipe } from '../../../../../pipes/categories.pipe';
import { CartService } from '../../../../../services/cart.service';
import { GetMenuDataService } from '../../../../../services/get-menu-data.service';
import { MenuComponent } from '../menu.component';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { RippleModule } from 'primeng/ripple';

@Component({
  selector: 'app-menu-categories',
  standalone: true,
  imports: [
    CategoriesPipe,
    MenuComponent,
    ButtonModule,
    ToastModule,
    RippleModule,
  ],
  templateUrl: './menu-categories.component.html',
  styleUrl: './menu-categories.component.scss',
  providers: [MessageService],
})
export class MenuCategoriesComponent {
  AllData!: Allmenudata[];
  CurrentImage!: string;
  ActivatedCategory!: string;
  Order: menuItem[] = [];

  constructor(
    @Inject(PLATFORM_ID) private PLATFORM_ID: object,
    private _GetMenuDataService: GetMenuDataService,
    private _ActivatedRoute: ActivatedRoute,
    private _CartService: CartService,
    private _MessageService: MessageService
  ) {}
  ngOnInit(): void {
    this.getCartServiceData();
    this.get_ActivatedRoute();
  }

  get_ActivatedRoute(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next: (response) => {
        this.ActivatedCategory = response.get('id') as string;
        this.loadData();
        this.loadDataImage();
      },
    });
  }

  loadDataImage(): void {
    this._GetMenuDataService.AllImages.subscribe({
      next: (response) => {
        response?.Folder1.map((ele) => {
          if (ele.Image_Name === this.ActivatedCategory) {
            this.CurrentImage = ele.Image_Url;
          }
        });
      },
    });
  }

  loadData(): void {
    this._GetMenuDataService.AllData.subscribe({
      next: (response) => {
        this.AllData = response as Allmenudata[];
      },
    });
  }
  getCartServiceData(): void {
    this._CartService.currentOrder.subscribe({
      next: (response) => {
        this.Order = response;
      },
    });
  }
  onChooseDrinkClick(item: menuItem): void {
    if (!this.Order.includes(item)) {
      this.Order.push(item);
      this.HandleSessionStorage();
      this.addToCart();
      this.addToaster(
        'success',
        'Success',
        `${item.Name} has added successfully.`,
        1000
      );
    } else {
      this.addToaster(
        'warn',
        'Warn',
        `${item.Name} has been added before`,
        1000
      );
    }
  }
  /** Handle Add Items To Cart By Behavior Subject Service */
  addToCart(): void {
    this._CartService.currentOrder.next(this.Order);
  }
  addToaster(
    severity: string,
    summary: string,
    detail: string,
    life: number
  ): void {
    this._MessageService.clear();
    this._MessageService.add({
      severity: severity,
      summary: summary,
      detail: detail,
      life: life,
    });
  }
  /** Add Order To sessionStorage */
  HandleSessionStorage(): void {
    if (isPlatformBrowser(this.PLATFORM_ID)) {
      sessionStorage.setItem('userOrder', JSON.stringify(this.Order));
    }
  }
}

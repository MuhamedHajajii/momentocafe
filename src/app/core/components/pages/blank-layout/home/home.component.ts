import { CommonModule, DOCUMENT, NgOptimizedImage } from '@angular/common';
import { Component, Inject, NgZone } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { GetMenuDataService } from '../../../../services/get-menu-data.service';
import { MenuComponent } from '../menu/menu.component';
import { Allimages } from './../../../../interfaces/allimages';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgOptimizedImage,
    RouterLink,
    CarouselModule,
    CommonModule,
    MenuComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  showOwle: boolean = true;
  toggleLightBox: boolean = false;
  BannerImages!: Allimages;
  AdsVideo!: any;
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    autoplay: true,
    navSpeed: 700,
    margin: 10,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 4,
      },
    },
    nav: false,
  };

  done(): void {
    this.showOwle = false;
  }

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private _GetMenuDataService: GetMenuDataService,
    private ngZone: NgZone
  ) {}

  ngOnInit(): void {
    // this.loadData();
    if (this.document.readyState !== 'loading') {
      setTimeout(() => {
        this.toggleLightBox = true;
      }, 5000);
    }
  }
  // ngAfterViewChecked(): void {
  //   this.loadData();
  // }
  ngAfterContentChecked(): void {
    this.BannerImages = this._GetMenuDataService.AllImages;
  }

  /** ======================================== */
  /** Light Box Handle */
  /** ======================================== */
  onToggleLightBox(): void {
    this.toggleLightBox = !this.toggleLightBox;
  }
  stopProp(e: Event): void {
    e.stopPropagation();
  }
  /** ======================================== */
  /** ======================================== */
}

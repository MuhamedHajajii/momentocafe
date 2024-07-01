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

  constructor(private _GetMenuDataService: GetMenuDataService) {}

  ngOnInit(): void {
    this._GetMenuDataService.GetData().subscribe();
    this._GetMenuDataService.GetImages().subscribe();
    this.BannerImages = this._GetMenuDataService.AllImages;
  }
}

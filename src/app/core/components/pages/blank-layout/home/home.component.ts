import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { MenuComponent } from '../menu/menu.component';

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
  slidesStore = [
    {
      id: '1',
      alt: 'bannar one',
      title: 'bannar one',
      src: '/assets/banaers/1.jpg',
    },
    {
      id: '12',
      alt: 'bannar two',
      title: 'bannar two',
      src: '/assets/banaers/2.jpg',
    },
    {
      id: '3',
      alt: 'bannar three',
      title: 'bannar three',
      src: '/assets/banaers/3.jpg',
    },
    {
      id: '4',
      alt: 'bannar four',
      title: 'bannar four',
      src: '/assets/banaers/4.jpg',
    },
    {
      id: '4',
      alt: 'bannar four',
      title: 'bannar four',
      src: '/assets/banaers/4.jpg',
    },
  ];
}

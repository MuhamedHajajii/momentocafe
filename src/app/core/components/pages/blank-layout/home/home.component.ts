import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  mainMenuCatigries = [
    { name: 'Hot Coffees', img: '/assets/home-menu/1.png' },
    { name: 'Hot Drinks', img: '/assets/home-menu/1.png' },
    { name: 'Cold Coffees', img: '/assets/home-menu/1.png' },
    { name: 'Milkshakes', img: '/assets/home-menu/1.png' },
    { name: 'Cocktail & Mixes', img: '/assets/home-menu/1.png' },
    { name: 'Frappe', img: '/assets/home-menu/1.png' },
    { name: 'Smoothiese', img: '/assets/home-menu/1.png' },
    { name: 'essentials', img: '/assets/home-menu/1.png' },
    { name: 'dessert', img: '/assets/home-menu/1.png' },
    { name: 'fresh juice', img: '/assets/home-menu/1.png' },
    { name: 'momentos', img: '/assets/home-menu/1.png' },
    { name: 'momento boxes', img: '/assets/home-menu/1.png' },
    { name: 'extras', img: '/assets/home-menu/1.png' },
  ];
}

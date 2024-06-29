import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [NgOptimizedImage, RouterLink],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent {
  mainMenuCatigries = [
    {
      name: 'Coffees',
      img: '/assets/home-menu/pngwing.com (1).png',
      link: '/hotdrinks',
    },
    {
      name: 'Hot Drinks',
      img: '/assets/home-menu/tea.png',
      link: '/tea',
    },
    {
      name: 'Milkshakes',
      img: '/assets/home-menu/MILKSHAKES.png',
      link: '/milkshakes',
    },
    {
      name: 'Cocktail & Mixes',
      img: '/assets/home-menu/COCTAIL.png',
      link: '/cocktail',
    },
    {
      name: 'fresh juice',
      img: '/assets/home-menu/FRESHJUICE.png',
      link: '/freshjuice',
    },
    {
      name: 'momento boxes',
      img: '/assets/home-menu/desserts.png',
      link: '/boxes',
    },
  ];
}

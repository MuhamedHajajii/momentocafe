import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-freshjuice',
  standalone: true,
  imports: [NgOptimizedImage, RouterLink],
  templateUrl: './freshjuice.component.html',
  styleUrl: './freshjuice.component.scss',
})
export class FreshjuiceComponent {
  freshJuce = {
    section_name: 'Fresh Juice',
    items: [
      {
        name: 'mango',
        price1: '52',
      },
      {
        name: 'lemon',
        price1: '52',
      },
      {
        name: 'strawberry',
        price1: '52',
      },
      {
        name: 'guava',
        price1: '52',
      },
      {
        name: 'orange',
        price1: '52',
      },
      {
        name: 'kiwi',
        price1: '52',
      },
    ],
  };
  frappe = {
    section_name: 'Frappe',
    items: [
      {
        name: 'coffee',
        price1: '59',
      },
      {
        name: 'mocha',
        price1: '59',
      },
      {
        name: 'nutella',
        price1: '59',
      },
      {
        name: 'vanila',
        price1: '59',
      },
      {
        name: 'caramel',
        price1: '59',
      },
      {
        name: 'hazelnut',
        price1: '72',
      },
      {
        name: 'cookies',
        price1: '72',
      },
    ],
  };
}

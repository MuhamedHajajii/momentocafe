import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-milkshakes',
  standalone: true,
  imports: [NgOptimizedImage, RouterLink],
  templateUrl: './milkshakes.component.html',
  styleUrl: './milkshakes.component.scss',
})
export class MilkshakesComponent {
  hotcoffees = [
    {
      name: 'Nutella',
      price1: '65',
    },
    {
      name: 'strawberry',
      price1: '65',
    },
    {
      name: 'mango',
      price1: '65',
    },
    {
      name: 'vanilla',
      price1: '65',
    },
    {
      name: 'caramel',
      price1: '65',
    },
    {
      name: 'oreo',
      price1: '65',
    },
    {
      name: 'hazelnut',
      price1: '78',
    },
    {
      name: 'lotus',
      price1: '78',
    },
    {
      name: 'pistachio',
      price1: '85',
    },
    {
      name: 'snickers',
      price1: '91',
    },
    {
      name: 'kitkat',
      price1: '91',
    },
  ];
}

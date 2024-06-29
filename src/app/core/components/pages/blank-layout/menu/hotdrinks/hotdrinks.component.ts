import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hotdrinks',
  standalone: true,
  imports: [NgOptimizedImage, RouterLink],
  templateUrl: './hotdrinks.component.html',
  styleUrl: './hotdrinks.component.scss',
})
export class HotdrinksComponent {
  hotcoffees = [
    {
      name: '',
      price1: 'Small',
      price2: 'Double',
    },
    {
      name: 'Turkish coffee',
      price1: '25',
      price2: '33',
    },
    {
      name: 'Espresso',
      price1: '29',
      price2: '37',
    },
    {
      name: 'nutella coffee',
      price1: '32',
      price2: '38',
    },
    {
      name: 'french coffee',
      price1: '32',
      price2: '38',
    },
    {
      name: 'hazelnut coffee',
      price1: '33',
      price2: '39',
    },
    {
      name: 'american coffee',
      price1: '29',
      price2: '37',
    },
    {
      name: 'macchiato',
      price1: '37',
      price2: '46',
    },
    {
      name: 'nescafe',
      price1: '',
      price2: '46',
    },
    {
      name: 'cappuccino',
      price1: '',
      price2: '59',
    },
    {
      name: 'latte',
      price1: '',
      price2: '52',
    },
    {
      name: 'macha latte',
      price1: '',
      price2: '59',
    },
    {
      name: 'louts latte',
      price1: '',
      price2: '59',
    },
    {
      name: 'SPANISH LATTE',
      price1: '',
      price2: '59',
    },
    {
      name: 'PISTACHIO LATTE',
      price1: '',
      price2: '65',
    },
    {
      name: 'CORTADO',
      price1: '',
      price2: '52',
    },
    {
      name: 'FLAT WHITE',
      price1: '',
      price2: '65',
    },
    {
      name: 'CARAMEL MACCHIATO',
      price1: '',
      price2: '55',
    },
    {
      name: 'MOCHA',
      price1: '',
      price2: '55',
    },
    {
      name: 'WHITE MOCHA',
      price1: '',
      price2: '55',
    },
  ];
}

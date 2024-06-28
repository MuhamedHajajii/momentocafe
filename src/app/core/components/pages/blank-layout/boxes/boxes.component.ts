import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-boxes',
  standalone: true,
  imports: [NgOptimizedImage, RouterLink],
  templateUrl: './boxes.component.html',
  styleUrl: './boxes.component.scss',
})
export class BoxesComponent {
  momentos = {
    section_name: 'momentos',
    items: [
      {
        name: 'mini pancakes (12 pcs)',
        price1: '52',
        describtion: '( lotus - nutella - caramel - pistacio )',
      },
      {
        name: 'stick waffle (2 pcs)',
        price1: '52',
        describtion: '( lotus - nutella - caramel - pistacio )',
      },
      {
        name: 'waffle bomb',
        price1: '52',
        describtion: '',
      },
      {
        name: 'waffle cup',
        price1: '52',
        describtion: '',
      },
      {
        name: 'waffle',
        price1: '52',
        describtion: '',
      },
    ],
  };
  dessert = {
    section_name: 'dessert',
    items: [
      {
        name: 'molten cake',
        price1: '65',
      },
      {
        name: 'chocolate fudge',
        price1: '52',
      },
      {
        name: 'red velvet',
        price1: '52',
      },
      {
        name: 'brownies',
        price1: '52',
      },
      {
        name: 'cheese cake',
        price1: '52',
      },
    ],
  };
  momentoBoxes = {
    section_name: 'Momento boxes',
    items: [
      {
        name: 'friends box',
        price1: '130',
        description: '( cheese cake - waffle - brownies )',
      },
      {
        name: 'couples box',
        price1: '182',
        description: '( molten cake - red velvet - 2blue sky )',
      },
      {
        name: 'twins box',
        price1: '195',
        description:
          '( chocolate fudge - 2pcs stick waffle - 2passion fruit mojito )',
      },
      {
        name: 'family box',
        price1: '260',
        description:
          '( waffle - 2pcs stick waffle - molten cake chocolate - molten cake lotus - red velvet )',
      },
      {
        name: 'momento box',
        price1: '390',
        description:
          '( molten cake - chocolate fudge - brownies - 2milkshake lotus - 2hot chocolate )',
      },
    ],
  };
  extras = {
    section_name: 'extras',
    items: [
      {
        name: 'milk',
        price1: '13',
      },
      {
        name: 'espresso shot',
        price1: '26',
      },
      {
        name: 'flavours',
        price1: '13',
      },
      {
        name: 'sauce',
        price1: '13',
      },
      {
        name: 'whippes cream',
        price1: '13',
      },
      {
        name: 'ice cream',
        price1: '13',
      },
    ],
  };
}

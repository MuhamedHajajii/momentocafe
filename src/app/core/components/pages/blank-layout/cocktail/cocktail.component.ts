import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cocktail',
  standalone: true,
  imports: [NgOptimizedImage, RouterLink],
  templateUrl: './cocktail.component.html',
  styleUrl: './cocktail.component.scss',
})
export class CocktailComponent {
  hotcoffees = [
    {
      name: 'florida',
      price1: '65',
      description: '( Mango - strawberry - orange )',
    },
    {
      name: 'summer drink',
      price1: '46',
      description: '( mixberry - soda )',
    },
    {
      name: 'cherry cola',
      price1: '46',
      description: '( cherry - cola )',
    },
    {
      name: 'pina colada',
      price1: '70',
      description: '( pinapple - coconut - vanilla )',
    },
    {
      name: 'sunshine',
      price1: '46',
      description: '( mint - soda - lemon )',
    },
    {
      name: 'sunset',
      price1: '46',
      description: '( pomegranate - soda - lemon )',
    },
    {
      name: 'blue sky',
      price1: '46',
      description: '( blue orange - soda )',
    },
    {
      name: 'orange iced black',
      price1: '52',
      description: '( orange - espresso )',
    },
    {
      name: 'lemon ice cream soda',
      price1: '52',
      description: '( vanilla ice cream - lemon - soda )',
    },
    {
      name: 'soda flavour',
      price1: '52',
      description: '( red berry - lavender - soda )',
    },
    {
      name: 'hulk',
      price1: '52',
      description: '( lavender - blue orange - soda )',
    },
    {
      name: 'mango mojito',
      price1: '59',
      description: '( white mint - soda- lemon - orange - mango )',
    },
    {
      name: 'strawberry mojito',
      price1: '59',
      description: '( white mint - soda- lemon - orange - strawberry )',
    },
    {
      name: 'passion fruit mojito',
      price1: '59',
      description: '( white mint - soda- lemon - orange - passion fruit )',
    },
    {
      name: 'mix mojito',
      price1: '59',
      description: '( choose the flavour you like )',
    },
  ];
}

import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tea',
  standalone: true,
  imports: [NgOptimizedImage, RouterLink],
  templateUrl: './tea.component.html',
  styleUrl: './tea.component.scss',
})
export class TeaComponent {
  hotcoffees = [
    {
      name: 'tea',
      price1: '20',
    },
    {
      name: 'green tea',
      price1: '26',
    },
    {
      name: 'flavoured tea',
      price1: '33',
    },
    {
      name: 'tea latte',
      price1: '35',
    },
    {
      name: 'herbs',
      price1: '29',
    },
    {
      name: 'hot cider',
      price1: '46',
    },
    {
      name: 'hot chocolate',
      price1: '46',
    },
    {
      name: 'hot white chocolate',
      price1: '46',
    },
  ];
}

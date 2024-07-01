import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { GetMenuDataService } from '../../../../services/get-menu-data.service';
import { Allimages } from './../../../../interfaces/allimages';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [NgOptimizedImage, RouterLink, CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent {
  Allimages!: Allimages;
  constructor(private _GetMenuDataService: GetMenuDataService) {}
  ngOnInit(): void {
    this._GetMenuDataService.AllImages.subscribe({
      next: (response) => {
        this.Allimages = response as Allimages;
      },
    });
  }
}

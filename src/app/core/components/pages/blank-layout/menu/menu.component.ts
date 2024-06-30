import { Allimages } from './../../../../interfaces/allimages';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { GetMenuDataService } from '../../../../services/get-menu-data.service';

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
    this.Allimages = this._GetMenuDataService.AllImages;
  }
  gAfterContentChecked(): void {
    this.Allimages = this._GetMenuDataService.AllImages;
  }
  ngAfterViewChecked(): void {
    this.Allimages = this._GetMenuDataService.AllImages;
    //Called after every check of the component's view. Applies to components only.
    //Add 'implements AfterViewChecked' to the class.
  }
}

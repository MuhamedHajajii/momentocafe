import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Allmenudata } from '../../../../../interfaces/allmenudata';
import { CategoriesPipe } from '../../../../../pipes/categories.pipe';
import { GetMenuDataService } from '../../../../../services/get-menu-data.service';
import { MenuComponent } from '../menu.component';

@Component({
  selector: 'app-menu-categories',
  standalone: true,
  imports: [CategoriesPipe, MenuComponent],
  templateUrl: './menu-categories.component.html',
  styleUrl: './menu-categories.component.scss',
})
export class MenuCategoriesComponent {
  AllData!: Allmenudata[];
  CurrentImage!: string;
  ActivatedCategory!: string;
  constructor(
    private _GetMenuDataService: GetMenuDataService,
    private _ActivatedRoute: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.get_ActivatedRoute();
    this.loadData();
  }

  get_ActivatedRoute(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next: (response) => {
        this.ActivatedCategory = response.get('id') as string;
        if (this._GetMenuDataService.AllImages) {
          this._GetMenuDataService.AllImages.Folder1.map((ele) => {
            if (ele.Image_Name === this.ActivatedCategory) {
              this.CurrentImage = ele.Image_Url;
            }
          });
        }
      },
    });
  }

  loadData(): void {
    this.AllData = this._GetMenuDataService.AllData;
  }
}

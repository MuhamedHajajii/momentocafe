import { Pipe, PipeTransform } from '@angular/core';
import { Allmenudata } from '../interfaces/allmenudata';
import { MenuItem } from 'primeng/api';

@Pipe({
  name: 'categories',
  standalone: true,
})
export class CategoriesPipe implements PipeTransform {
  transform(MenuItem: Allmenudata[], Category: string): Allmenudata[] {
    return MenuItem.filter((ele) => ele.Category_Name === Category);
  }
}

import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { EventsService } from '../../../services/events.service';
import { BadgeModule } from 'primeng/badge';
import { GetMenuDataService } from '../../../services/get-menu-data.service';
import { Allmenudata } from '../../../interfaces/allmenudata';
@Component({
  selector: 'app-nav-blank',
  standalone: true,
  imports: [RouterLink, BadgeModule],
  templateUrl: './nav-blank.component.html',
  styleUrl: './nav-blank.component.scss',
})
export class NavBlankComponent {
  constructor(
    private _EventsService: EventsService,
    private _GetMenuDataService: GetMenuDataService
  ) {}
  toggleLightBox(): void {
    this._EventsService.toggleLightBox.next(true);
  }
  ngOnInit(): void {
    this._GetMenuDataService.GetData().subscribe();
    this._GetMenuDataService.GetImages().subscribe();
  }
}

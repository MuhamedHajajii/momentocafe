import { Component, Inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BadgeModule } from 'primeng/badge';
import { EventsService } from '../../../services/events.service';
import { GetMenuDataService } from '../../../services/get-menu-data.service';
import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-nav-blank',
  standalone: true,
  imports: [RouterLink, BadgeModule],
  templateUrl: './nav-blank.component.html',
  styleUrl: './nav-blank.component.scss',
})
export class NavBlankComponent {
  constructor(
    @Inject(DOCUMENT) private document: Document,

    private _EventsService: EventsService,
    private _GetMenuDataService: GetMenuDataService
  ) {}
  // toggleLightBox(): void {
  //   this._EventsService.toggleLightBox.next(true);
  // }
  ngOnInit(): void {
    this._GetMenuDataService.GetData().subscribe();
    this._GetMenuDataService.GetImages().subscribe();
    this.delayDisplayVideo;
  }

  toggleLightBox: boolean = false;
  delayDisplayVideo(): void {
    if (this.document.readyState !== 'loading') {
      setTimeout(() => {
        this.toggleLightBox = true;
      }, 5000);
    }
  }
  /** ======================================== */
  /** Light Box Handle */
  /** ======================================== */
  onToggleLightBox(): void {
    this.toggleLightBox = !this.toggleLightBox;
  }
  stopProp(e: Event): void {
    e.stopPropagation();
  }
  /** ======================================== */
  /** ======================================== */
}

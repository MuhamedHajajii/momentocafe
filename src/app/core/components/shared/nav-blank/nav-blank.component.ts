import { Component, Inject, NgZone } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BadgeModule } from 'primeng/badge';
import { EventsService } from '../../../services/events.service';
import { GetMenuDataService } from '../../../services/get-menu-data.service';
import { DOCUMENT } from '@angular/common';
import { take, timer } from 'rxjs';
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
    private zone: NgZone,
    private _GetMenuDataService: GetMenuDataService
  ) {}
  ngOnInit(): void {
    this._GetMenuDataService.GetData().subscribe();
    this._GetMenuDataService.GetImages().subscribe();
    this.delayDisplayVideo();
  }

  toggleLightBox: boolean = false;
  delayDisplayVideo(): void {
    console.log(this.document.readyState);
    if (this.document.readyState !== 'loading') {
      this.zone.runOutsideAngular(() => {
        timer(5000)
          .pipe(take(1))
          .subscribe(() => {
            this.toggleLightBox = true;
          });
      });
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

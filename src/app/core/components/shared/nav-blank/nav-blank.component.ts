import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Component, Inject, NgZone, PLATFORM_ID } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BadgeModule } from 'primeng/badge';
import { take, timer } from 'rxjs';
import { GetMenuDataService } from '../../../services/get-menu-data.service';

@Component({
  selector: 'app-nav-blank',
  standalone: true,
  imports: [RouterLink, BadgeModule],
  templateUrl: './nav-blank.component.html',
  styleUrl: './nav-blank.component.scss',
})
export class NavBlankComponent {
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(DOCUMENT) private document: Document,
    private zone: NgZone,
    private _GetMenuDataService: GetMenuDataService
  ) {}
  ngOnInit(): void {
    this._GetMenuDataService.GetData().subscribe();
    this._GetMenuDataService.GetImages().subscribe();
    this.StartAnimation();
    this.delayDisplayVideo();
  }
  /** Start animation */
  StartAnimation(): void {
    if (isPlatformBrowser(this.platformId)) {
      if (this.document.readyState !== 'loading') {
        this.loadAOS();
      } else {
        this.document.addEventListener('DOMContentLoaded', () =>
          this.loadAOS()
        );
      }
    }
  }

  private async loadAOS() {
    try {
      const { default: AOS } = await import('aos');
      AOS.init();

      // Refresh AOS to account for dynamically added elements
      AOS.refresh();
    } catch (error) {
      console.error('Error loading AOS:', error);
    }
  }

  toggleLightBox: boolean = false;
  delayDisplayVideo(): void {
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

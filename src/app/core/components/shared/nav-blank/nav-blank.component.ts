import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { EventsService } from '../../../services/events.service';

@Component({
  selector: 'app-nav-blank',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './nav-blank.component.html',
  styleUrl: './nav-blank.component.scss',
})
export class NavBlankComponent {
  constructor(private _EventsService: EventsService) {}
  toggleLightBox(): void {
    this._EventsService.toggleLightBox.next(true);
  }
}

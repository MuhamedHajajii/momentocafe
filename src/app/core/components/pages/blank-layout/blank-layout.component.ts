import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBlankComponent } from '../../shared/nav-blank/nav-blank.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { EventsService } from '../../../services/events.service';

@Component({
  selector: 'app-blank-layout',
  standalone: true,
  imports: [RouterOutlet, NavBlankComponent, FooterComponent, HomeComponent],
  templateUrl: './blank-layout.component.html',
  styleUrl: './blank-layout.component.scss',
})
export class BlankLayoutComponent {
  constructor(private _EventsService: EventsService) {}

  ngOnInit(): void {
    this._EventsService.toggleLightBox.subscribe(
      (response) => (this.isLightBox = response)
    );
  }
  isLightBox: boolean = false;
  toggleLightBox(): void {
    this.isLightBox = !this.isLightBox;
  }
  stopProp(e: Event): void {
    e.stopPropagation();
  }
}

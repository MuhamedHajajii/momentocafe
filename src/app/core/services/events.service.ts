import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EventsService {
  toggleLightBox: BehaviorSubject<boolean> = new BehaviorSubject(false);
  constructor() {}
}

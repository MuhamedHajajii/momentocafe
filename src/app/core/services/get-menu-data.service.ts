import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { BehaviorSubject, Observable, of, tap } from 'rxjs';
import { Allimages } from '../interfaces/allimages';
import { Allmenudata } from '../interfaces/allmenudata';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class GetMenuDataService {
  constructor(
    private _HttpClient: HttpClient,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}
  AllData: BehaviorSubject<Allmenudata[] | null> = new BehaviorSubject<
    Allmenudata[] | null
  >(null);
  AllImages: BehaviorSubject<Allimages | null> =
    new BehaviorSubject<Allimages | null>(null);

  GetData(): Observable<Allmenudata[] | null> {
    if (isPlatformBrowser(this.platformId)) {
      return this._HttpClient
        .get<Allmenudata[]>(
          `https://script.google.com/macros/s/AKfycbwoq3YmKn47pBKhUtqPfVSHu3Ub0Fcjirsi14PUP_zDwUM26mX3PF7HpFP5HDVPoj-M/exec`
        )
        .pipe(
          tap((data) => {
            this.AllData.next(data);
          })
        );
    } else {
      return of(null);
    }
  }

  GetImages(): Observable<Allimages | null> {
    if (isPlatformBrowser(this.platformId)) {
      return this._HttpClient
        .get<Allimages>(
          `https://script.google.com/macros/s/AKfycbxjSZdumyx5ohUa1ezT4eya7jZR56Fu3yYJ1V77qrbFOnlkCVagzeCPMJfUrUFi73tk/exec`
        )
        .pipe(
          tap((data) => {
            this.AllImages.next(data);
          })
        );
    } else {
      return of(null);
    }
  }
}

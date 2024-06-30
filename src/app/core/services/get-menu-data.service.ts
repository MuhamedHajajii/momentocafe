import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, from, tap } from 'rxjs';
import { Allmenudata } from '../interfaces/allmenudata';
import { Allimages } from '../interfaces/allimages';

@Injectable({
  providedIn: 'root',
})
export class GetMenuDataService {
  constructor(private _HttpClient: HttpClient) {}
  timestamp = new Date().getTime();
  AllData!: Allmenudata[];
  AllImages!: Allimages;
  getMenuData(Categorie: string): Observable<any> {
    return this._HttpClient.get(
      `https://sheetdb.io/api/v1/s7b40rg2whsx5?sheet=${Categorie}`
    );
  }

  GetData(): Observable<Allmenudata[]> {
    return this._HttpClient
      .get<Allmenudata[]>(
        `https://script.google.com/macros/s/AKfycbwoq3YmKn47pBKhUtqPfVSHu3Ub0Fcjirsi14PUP_zDwUM26mX3PF7HpFP5HDVPoj-M/exec`
      )
      .pipe(
        tap((data) => {
          console.log(data);
          this.AllData = data;
        })
      );
  }

  GetImages(): Observable<Allimages> {
    return this._HttpClient
      .get<Allimages>(
        `https://script.google.com/macros/s/AKfycbxjSZdumyx5ohUa1ezT4eya7jZR56Fu3yYJ1V77qrbFOnlkCVagzeCPMJfUrUFi73tk/exec`
      )
      .pipe(
        tap((data) => {
          console.log(data);
          this.AllImages = data;
        })
      );
  }
}

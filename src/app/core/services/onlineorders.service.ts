import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OnlineordersService {
  constructor(private _HttpClient: HttpClient) {}

  sendOrder(order: {}): Observable<any> {
    return this._HttpClient.post(
      `https://script.google.com/macros/s/AKfycbxG3iw5Q1Hb4p8fKs44-CrO79kdNr3uSGJ7Jg6Yz5QHAPF-TTyMhyyx_qxIDSQ4j0o4/exec`,
      JSON.stringify(order)
    );
  }
}

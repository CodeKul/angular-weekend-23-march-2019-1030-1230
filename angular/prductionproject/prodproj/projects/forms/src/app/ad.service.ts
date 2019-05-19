import { Injectable } from '@angular/core';
import { Observable, interval } from 'rxjs';
import 'rxjs/add/observable/interval'

@Injectable({
  providedIn: 'root'
})
export class AdService {
  constructor() {
  }

  obsAds() {
    return interval(1500)
  }
}
export interface Ad {
  nm: string
  img: string
}

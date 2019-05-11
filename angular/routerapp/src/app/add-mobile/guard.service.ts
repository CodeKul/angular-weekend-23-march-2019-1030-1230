import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GuardService {

  em : EventEmitter<boolean> = new EventEmitter()

  constructor() { }
}

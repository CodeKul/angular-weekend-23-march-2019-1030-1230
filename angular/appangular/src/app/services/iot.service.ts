import { Injectable } from '@angular/core';

@Injectable({
  providedIn : 'root'
})
export class IotService {

  private rpm : number = 0
  
  constructor() { }

  inc() {
    return ++this.rpm
  }

  dec() {
    return --this.rpm
  }
}

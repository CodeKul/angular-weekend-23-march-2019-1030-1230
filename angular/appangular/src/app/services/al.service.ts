import { MyService } from './my.service';
import { EventEmitter, Injectable } from '@angular/core';
import { EvAl } from '../int-cmp-com-v1/ev-al';

@Injectable({
  providedIn : 'root'
})
export class AlService {

  private alEm: EventEmitter<EvAl> = new EventEmitter()

  constructor(
    private mySv : MyService
  ) {

  }

  publishAl(al: string) {
    this.alEm.emit({ al: al })
  }

  subscribeAl(cbFn: (ev: EvAl) => void) {
    this.alEm.subscribe(ev => cbFn(ev))
  }
}

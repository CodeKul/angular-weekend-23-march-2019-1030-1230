import { EventEmitter } from '@angular/core';
import { EvAl } from '../int-cmp-com-v1/ev-al';

export class AlService {

  private alEm: EventEmitter<EvAl> = new EventEmitter()

  constructor() {

  }

  publishAl(al: string) {
    this.alEm.emit({ al: al })
  }

  subscribeAl(cbFn: (ev: EvAl) => void) {
    this.alEm.subscribe(ev => cbFn(ev))
  }
}

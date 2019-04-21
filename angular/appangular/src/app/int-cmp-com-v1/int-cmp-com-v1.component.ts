import { Component, OnInit } from '@angular/core';
import { EvAl } from './ev-al';

@Component({
  selector: 'app-int-cmp-com-v1',
  templateUrl: './int-cmp-com-v1.component.html',
  styleUrls: ['./int-cmp-com-v1.component.css']
})
export class IntCmpComV1Component implements OnInit {

  evAl: EvAl
  constructor() { }

  ngOnInit() {
  }

  captureAlert(evAl: EvAl) {
    console.log(`Received Event ${evAl}`)
    this.evAl = evAl
  }
}

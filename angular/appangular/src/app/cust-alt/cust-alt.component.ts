import { BtnEv } from './ev';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cust-alt',
  templateUrl: './cust-alt.component.html',
  styleUrls: ['./cust-alt.component.css']
})
export class CustAltComponent implements OnInit {

  @Input()
  ttl: string

  @Input('typ')
  type: string

  @Output()
  btnClk: EventEmitter<BtnEv> = new EventEmitter()

  constructor() { }

  ngOnInit() {
    this.type = `alert alert-${this.type}`
    console.log(this.type)
  }

  okClk() {
    let ev: BtnEv = {
      ttl: this.ttl,
      typ: this.type
    }
    this.btnClk.emit(ev)
    console.log(`Button Clicked in CustAltComponent`)
  }
}

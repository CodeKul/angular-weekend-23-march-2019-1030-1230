import { Component, OnInit, Input, Output } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
    this.type = `alert alert-${this.type}`
    console.log(this.type)
  }

  okClk() {

  }
}

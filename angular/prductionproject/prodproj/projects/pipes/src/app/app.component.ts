import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipes';
  exp = 10
  sal = 10
  name = 'android'
  date = new Date()
  obj = {
    nm: 'java',
    ver: 8,
    vendor: 'openjdk'
  }
  cmNm: string

  mobiles: Array<Mobile> = [
    { company: 'motorola', cost: 45, os: 'android' },
    { company: 'htc', cost: 85, os: 'windows' },
    { company: 'microsoft', cost: 26, os: 'mango' },
    { company: 'bb', cost: 75, os: 'rim' },
    { company: 'samsung', cost: 30, os: 'android' },
    { company: 'nokia', cost: 25, os: 'symbian' },
    { company: 'apple', cost: 1, os: 'iOS' },
  ]

  newMobile(cmp: string, cost: number, os: string) {
    let mobile: Mobile = {
      company: cmp,
      cost: cost,
      os: os
    }
    this.mobiles.push(mobile)
  }
}

export class Mobile {
  company: string
  cost: number
  os: string
}

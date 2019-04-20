import { BtnEv } from './cust-alt/ev';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'appangular';
  ev : BtnEv

  onBtn(ev: BtnEv) {
    this.ev = ev
    console.log(ev)
    console.log(`In App Component onBtn`)
  }
}

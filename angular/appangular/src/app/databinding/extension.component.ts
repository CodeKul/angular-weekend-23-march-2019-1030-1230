import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-extension',
  templateUrl: './extension.component.html',
  styleUrls: ['./extension.component.css']
})
export class ExtensionComponent implements OnInit {

  cls = 'alert'
  constructor() { }

  ngOnInit() {
  }

  myClk(wh: number) {
    if (wh == 1) {
      // primary
      this.cls = 'alert alert-info'
    } else if (wh == 2) {
      // secondary
      this.cls = 'alert alert-secondary'
    } else {
      // success
      this.cls = 'alert alert-success'
    }
  }
}

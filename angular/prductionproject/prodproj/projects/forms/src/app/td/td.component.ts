import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-td',
  templateUrl: './td.component.html',
  styleUrls: ['./td.component.css']
})
export class TdComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  mySub(frm: NgForm) {
    console.log(frm)
  }
}

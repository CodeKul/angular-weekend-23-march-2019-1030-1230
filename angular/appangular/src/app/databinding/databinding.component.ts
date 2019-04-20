import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit {

  myNm: string = 'android'
  typ = 'text'
  tw = 'hi'
  val = 0

  constructor() { }

  ngOnInit() {
  }

  myClk(ev: any) {
    console.log(new Date().toString())
    console.log(ev)
  }

  setVal(val : number) {
    this.val = val
  }
}

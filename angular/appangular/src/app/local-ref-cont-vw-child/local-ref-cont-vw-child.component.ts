import { Component, OnInit, ElementRef, ViewChild, ContentChild } from '@angular/core';

@Component({
  selector: 'app-local-ref-cont-vw-child',
  templateUrl: './local-ref-cont-vw-child.component.html',
  styleUrls: ['./local-ref-cont-vw-child.component.css']
})
export class LocalRefContVwChildComponent implements OnInit {

  @ViewChild('usNm')
  usNm: ElementRef

  @ContentChild('alDv')
  alDv: ElementRef

  constructor() { }

  ngOnInit() {
    this.usNm.nativeElement.style.border = '1px solid green'
    this.alDv.nativeElement.style.border = '1px solid red'
  }

  btnClk(el: any) {
    el.style.border = '1px solid red'
    console.log(el.value)
  }
}
